from __future__ import annotations
import os, re, io, csv, time, datetime as dt, threading
from dataclasses import dataclass, asdict
from typing import List, Dict, Optional, Any, Tuple
from urllib.parse import urljoin
from flask import Flask, jsonify, render_template, send_file, url_for, request
from jinja2 import DictLoader
from playwright.sync_api import sync_playwright, TimeoutError as PwTimeout
import requests

# ==================== CONFIG ====================
LIVE_URL = "https://www.casablanca-bourse.com/fr/live-market/marche-actions-groupement?pwa"
CASA_BASE = "https://www.casablanca-bourse.com/fr/"
HEADLESS = os.getenv("HEADLESS", "1") not in {"0", "false", "False"}
CACHE_SECONDS = 45

TABLE_SEL = "table"
HEAD_SEL = "thead th, thead td"
ROW_SEL = "tbody tr"
CELL_SEL = "td"

ALLOWED_TV_CODES = {"ATW","BCP","BOA","CIH","CDM","BCI","IAM","HPS","RIS","SMI","CSR","AGM"}

NAME_ALIASES = { 
    "attijari wafa bank":"ATW","attijariwafa bank":"ATW","awba":"ATW",
    "banque centrale populaire":"BCP","bcp":"BCP",
    "bank of africa":"BOA","boa":"BOA",
    "cih bank":"CIH","cih":"CIH",
    "credit du maroc":"CDM","credit du maroc (ste) sa":"CDM","cdm":"CDM",
    "bmci":"BCI",
    "maroc telecom":"IAM","itissalat al-maghrib":"IAM","iam":"IAM",
    "hps":"HPS","risma":"RIS","smi":"SMI","cosumar":"CSR","cosum ar":"CSR",
    "agma":"AGM","agma lahlou-tazi":"AGM"
}

SECTOR_BY_CODE = {
    "ATW":"Banques","BCP":"Banques","BOA":"Banques","CIH":"Banques","CDM":"Banques","BCI":"Banques",
    "IAM":"Télécoms","HPS":"Technologie","RIS":"Tourisme & Loisirs","SMI":"Mines",
    "CSR":"Agroalimentaire","AGM":"Services financiers"
}

@dataclass
class CasaRow:
    instrument: str
    status: Optional[str]
    ref: Optional[float]
    open: Optional[float]
    last: Optional[float]
    change_abs: Optional[float]
    change_pct: Optional[float]
    qty: Optional[float]
    volume: Optional[float]
    value: Optional[float]
    symbol: Optional[str]
    resolved_code: Optional[str]
    tv: Optional[str]
    has_tv: bool
    sector: Optional[str]
    ts: str

def _clean(x: Optional[str]) -> str:
    return (x or "").replace("\xa0"," ").replace("\u202f"," ").replace("\u2009"," ").strip()
def _num(x: Optional[str]) -> Optional[float]:
    if not x: return None
    s = (x.replace("\xa0","").replace("\u202f","").replace("\u2009","")
         .replace(" ","").replace(",",".").replace("%","").strip())
    if s in {"","-"}: return None
    try: return float(s)
    except Exception: return None
def _try_resolve_code(instrument: str, symbol_text: Optional[str]) -> Optional[str]:
    # Match by symbol/name dark guess
    if symbol_text:
        s = symbol_text.strip().upper()
        if re.fullmatch(r"[A-Z0-9\.]{1,8}", s):
            s = s.split(".")[0]
            if s in ALLOWED_TV_CODES:
                return s
    name = (instrument or "").lower()
    if name in NAME_ALIASES and NAME_ALIASES[name] in ALLOWED_TV_CODES:
        return NAME_ALIASES[name]
    m = re.search(r"\(([A-Z0-9\.]{1,8})\)", instrument or "")
    if m:
        s = m.group(1).upper().split(".")[0]
        if s in ALLOWED_TV_CODES: return s
    for w in re.findall(r"[A-Z]{2,6}", instrument or ""):
        if w in ALLOWED_TV_CODES:
            return w
    return None

def scrape_once() -> List[CasaRow]:
    rows: List[CasaRow] = []
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=HEADLESS)
        try:
            page = browser.new_page()
            page.goto(LIVE_URL, wait_until="networkidle")
            try: page.wait_for_selector(TABLE_SEL, timeout=15000)
            except PwTimeout: return rows
            ts = dt.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            for t in page.query_selector_all(TABLE_SEL):
                headers = [_clean(h.inner_text()) for h in t.query_selector_all(HEAD_SEL)]
                keymap: Dict[int,str] = {}
                for i, hx in enumerate(headers):
                    low = hx.lower()
                    if "instr" in low or low in {"titre","instrument"}: keymap[i]="instrument"
                    elif "symb" in low or "ticker" in low: keymap[i]="symbol"
                    elif "statut" in low or "status" in low: keymap[i]="status"
                    elif "référence" in low or "ref" in low: keymap[i]="ref"
                    elif "ouverture" in low or "open" in low: keymap[i]="open"
                    elif "dernier" in low or "last" in low: keymap[i]="last"
                    elif "var" in low and "%" in low: keymap[i]="change_pct"
                    elif low.startswith("var"): keymap[i]="change_abs"
                    elif "quantité" in low or "quantite" in low or "qty" in low: keymap[i]="qty"
                    elif "volume" in low and "quant" not in low: keymap[i]="volume"
                    elif "valeur" in low or "value" in low or "montant" in low: keymap[i]="value"
                for tr in t.query_selector_all(ROW_SEL):
                    tds = tr.query_selector_all(CELL_SEL)
                    if not tds: continue
                    vals: Dict[str, Optional[str]] = {}
                    for i, td in enumerate(tds):
                        if i in keymap:
                            vals[keymap[i]] = _clean(td.inner_text())
                    name = vals.get("instrument") or vals.get("symbol") or ""
                    if name.lower() in {"instrument",""}: continue
                    code = _try_resolve_code(name, vals.get("symbol"))
                    if code == "AGMA": code = "AGM"
                    tv = f"CSEMA:{code}" if code else None
                    sector = SECTOR_BY_CODE.get(code or "", "Autres")
                    rows.append(CasaRow(
                        instrument=name,
                        status=vals.get("status"),
                        ref=_num(vals.get("ref")),
                        open=_num(vals.get("open")),
                        last=_num(vals.get("last")),
                        change_abs=_num(vals.get("change_abs")),
                        change_pct=_num(vals.get("change_pct")),
                        qty=_num(vals.get("qty")),
                        volume=_num(vals.get("volume")),
                        value=_num(vals.get("value")),
                        symbol=vals.get("symbol"),
                        resolved_code=code,
                        tv=tv,
                        has_tv=bool(tv),
                        sector=sector,
                        ts=ts
                    ))
        finally:
            browser.close()
    return rows

_cache_rows: List[Dict[str, Any]] = []
_cache_ts_epoch: float = 0.0
_cache_lock = threading.Lock()
def get_rows(force: bool=False) -> Tuple[List[Dict[str, Any]], str]:
    global _cache_rows, _cache_ts_epoch
    now = time.time()
    with _cache_lock:
        if force or (not _cache_rows) or (now - _cache_ts_epoch) > CACHE_SECONDS:
            data = scrape_once()
            _cache_rows = [asdict(r) for r in data]
            _cache_ts_epoch = now
    ts_str = _cache_rows[0]["ts"] if _cache_rows else dt.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    return _cache_rows[:], ts_str

app = Flask(__name__)

@app.route("/")
def home():
    return "<h1>Bourse de Casablanca API</h1><p>Utilisez /api/live pour les données en temps réel</p>"

@app.route("/api/live")
def api_live():
    force = request.args.get("force", "").lower() in {"1","true"}
    rows, ts = get_rows(force=force)
    return jsonify({"data": rows, "ts": ts, "count": len(rows)})

@app.route("/api/refresh")
def api_refresh():
    rows, ts = get_rows(force=True)
    return jsonify({"status": "refreshed", "ts": ts, "count": len(rows)})

if __name__ == "__main__":
    port = int(os.getenv("PORT", "8080"))
    app.run(host="0.0.0.0", port=port, debug=False)
