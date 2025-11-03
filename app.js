// Indices data
const indicesData = [
  {
    name: "MASI",
    full_name: "Moroccan All Shares Index",
    description: "Indice regroupant toutes les actions cotées à la Bourse de Casablanca",
    current_value: 19636.52,
    previous_close: 19546.88,
    change: 89.64,
    change_pct: 0.46,
    high: 20340.23,
    low: 8908.44,
    ytd_change_pct: 2.27,
    last_update: "2025-11-02 15:45:00",
    color_primary: "linear-gradient(135deg, #1a73e8 0%, #7c3aed 100%)",
    sparkline: [18950, 19100, 19050, 19200, 19150, 19300, 19400]
  },
  {
    name: "MASI 20",
    full_name: "Morocco Stock Index 20",
    description: "Indice comprenant les 20 plus grandes entreprises du Maroc",
    current_value: 18745.30,
    previous_close: 18650.15,
    change: 95.15,
    change_pct: 0.51,
    high: 19200.00,
    low: 17500.00,
    ytd_change_pct: 3.15,
    last_update: "2025-11-02 15:45:00",
    color_primary: "linear-gradient(135deg, #ec4899 0%, #f59e0b 100%)",
    sparkline: [18200, 18400, 18350, 18500, 18600, 18700, 18745]
  }
];

// MASI 20 constituents data
const masi20Constituents = [
  {
    ticker: "ATW",
    name: "ATTIJARIWAFA BANK",
    weight: 20.5,
    sector: "Banques",
    market_cap: 167.16
  },
  {
    ticker: "IAM",
    name: "MAROC TELECOM",
    weight: 20.0,
    sector: "Télécoms",
    market_cap: 101.09
  },
  {
    ticker: "BCP",
    name: "BANQUE CENTRALE POPULAIRE",
    weight: 10.0,
    sector: "Banques",
    market_cap: 54.89
  },
  {
    ticker: "CMA",
    name: "CIMENTS DU MAROC",
    weight: 5.77,
    sector: "Bâtiment et Construction",
    market_cap: 27.28
  },
  {
    ticker: "CSR",
    name: "COSUMAR",
    weight: 6.88,
    sector: "Agroalimentaire",
    market_cap: 19.65
  },
  {
    ticker: "MNG",
    name: "MANAGEM",
    weight: 7.50,
    sector: "Mines",
    market_cap: 46.27
  }
];

// Stock data
const stocksData = [
  {
    instrument: "ATTIJARIWAFA BANK",
    symbol: "ATW",
    sector: "Banques",
    last: 485.50,
    change_abs: 5.20,
    change_pct: 1.08,
    ref: 480.30,
    open: 482.00,
    volume: 12500,
    value: 6068750.00,
    tv: "CSEMA:ATW",
    has_tv: true,
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Attijari.svg/320px-Attijari.svg.png"
  },
  {
    instrument: "BANQUE CENTRALE POPULAIRE",
    symbol: "BCP",
    sector: "Banques",
    last: 285.00,
    change_abs: -3.50,
    change_pct: -1.21,
    ref: 288.50,
    open: 287.00,
    volume: 8900,
    value: 2536500.00,
    tv: "CSEMA:BCP",
    has_tv: true,
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Logo_bcp.svg/320px-Logo_bcp.svg.png"
  },
  {
    instrument: "BANK OF AFRICA",
    symbol: "BOA",
    sector: "Banques",
    last: 168.90,
    change_abs: 2.40,
    change_pct: 1.44,
    ref: 166.50,
    open: 167.20,
    volume: 15600,
    value: 2634840.00,
    tv: "CSEMA:BOA",
    has_tv: true,
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Bank_of_Africa_logo.svg/320px-Bank_of_Africa_logo.svg.png"
  },
  {
    instrument: "CIH BANK",
    symbol: "CIH",
    sector: "Banques",
    last: 312.00,
    change_abs: -1.80,
    change_pct: -0.57,
    ref: 313.80,
    open: 312.50,
    volume: 5400,
    value: 1684800.00,
    tv: "CSEMA:CIH",
    has_tv: true,
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/CIH_Bank_Logo.svg/320px-CIH_Bank_Logo.svg.png"
  },
  {
    instrument: "CREDIT DU MAROC",
    symbol: "CDM",
    sector: "Banques",
    last: 654.00,
    change_abs: 8.50,
    change_pct: 1.32,
    ref: 645.50,
    open: 648.00,
    volume: 3200,
    value: 2092800.00,
    tv: "CSEMA:CDM",
    has_tv: true,
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Credit_du_maroc.svg/320px-Credit_du_maroc.svg.png"
  },
  {
    instrument: "BMCI",
    symbol: "BCI",
    sector: "Banques",
    last: 720.50,
    change_abs: -5.30,
    change_pct: -0.73,
    ref: 725.80,
    open: 722.00,
    volume: 2800,
    value: 2017400.00,
    tv: "CSEMA:BCI",
    has_tv: true,
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/BMCI_logo.svg/320px-BMCI_logo.svg.png"
  },
  {
    instrument: "MAROC TELECOM",
    symbol: "IAM",
    sector: "Télécoms",
    last: 128.90,
    change_abs: 2.10,
    change_pct: 1.66,
    ref: 126.80,
    open: 127.50,
    volume: 45200,
    value: 5826280.00,
    tv: "CSEMA:IAM",
    has_tv: true,
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Maroc_Telecom_logo.svg/320px-Maroc_Telecom_logo.svg.png"
  },
  {
    instrument: "HPS",
    symbol: "HPS",
    sector: "Technologie",
    last: 4850.00,
    change_abs: 125.00,
    change_pct: 2.65,
    ref: 4725.00,
    open: 4780.00,
    volume: 890,
    value: 4316500.00,
    tv: "CSEMA:HPS",
    has_tv: true,
    logo_url: "https://upload.wikimedia.org/wikipedia/en/thumb/5/54/Huawei_Technologies_Logo.svg/320px-Huawei_Technologies_Logo.svg.png"
  },
  {
    instrument: "RISMA",
    symbol: "RIS",
    sector: "Tourisme & Loisirs",
    last: 118.50,
    change_abs: -2.80,
    change_pct: -2.31,
    ref: 121.30,
    open: 120.00,
    volume: 6700,
    value: 793950.00,
    tv: "CSEMA:RIS",
    has_tv: true,
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Risma_logo.png/320px-Risma_logo.png"
  },
  {
    instrument: "SMI",
    symbol: "SMI",
    sector: "Mines",
    last: 2340.00,
    change_abs: 45.00,
    change_pct: 1.96,
    ref: 2295.00,
    open: 2310.00,
    volume: 1250,
    value: 2925000.00,
    tv: "CSEMA:SMI",
    has_tv: true,
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/SMI_Morocco_logo.png/320px-SMI_Morocco_logo.png"
  },
  {
    instrument: "COSUMAR",
    symbol: "CSR",
    sector: "Agroalimentaire",
    last: 215.60,
    change_abs: -1.20,
    change_pct: -0.55,
    ref: 216.80,
    open: 216.00,
    volume: 18900,
    value: 4074840.00,
    tv: "CSEMA:CSR",
    has_tv: true,
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Logo_Cosumar.png/320px-Logo_Cosumar.png"
  },
  {
    instrument: "AGMA LAHLOU-TAZI",
    symbol: "AGM",
    sector: "Services financiers",
    last: 1845.00,
    change_abs: 30.00,
    change_pct: 1.65,
    ref: 1815.00,
    open: 1825.00,
    volume: 720,
    value: 1328400.00,
    tv: "CSEMA:AGM",
    has_tv: true,
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/AGMA_logo.svg/320px-AGMA_logo.svg.png"
  }
];

const sectors = [
  "Tous",
  "Banques",
  "Télécoms",
  "Technologie",
  "Tourisme & Loisirs",
  "Mines",
  "Agroalimentaire",
  "Services financiers"
];

// Performance filters configuration
const performanceFilters = [
  { label: "Tous", key: "all", icon: "★", color: "#1a73e8" },
  { label: "En Hausse", key: "up", icon: "↑", color: "#10b981" },
  { label: "En Baisse", key: "down", icon: "↓", color: "#ef4444" },
  { label: "Stables", key: "stable", icon: "=", color: "#6b7280" }
];

const STABLE_THRESHOLD = 0.5;

// News data
const newsData = [
  {
    title: "Attijariwafa Bank annonce les résultats du Q3 2025",
    date: "2025-11-02",
    issuer: "ATTIJARIWAFA BANK",
    sector: "Banques",
    link: "https://www.casablanca-bourse.com"
  },
  {
    title: "Maroc Telecom augmente ses investissements en 5G",
    date: "2025-11-01",
    issuer: "MAROC TELECOM",
    sector: "Télécoms",
    link: "https://www.casablanca-bourse.com"
  },
  {
    title: "BCP renforce ses operations digitales",
    date: "2025-10-31",
    issuer: "BANQUE CENTRALE POPULAIRE",
    sector: "Banques",
    link: "https://www.casablanca-bourse.com"
  },
  {
    title: "Cosumar signe un accord stratégique",
    date: "2025-10-30",
    issuer: "COSUMAR",
    sector: "Agroalimentaire",
    link: "https://www.casablanca-bourse.com"
  },
  {
    title: "CIH Bank lance une nouvelle plateforme",
    date: "2025-10-29",
    issuer: "CIH BANK",
    sector: "Banques",
    link: "https://www.casablanca-bourse.com"
  },
  {
    title: "SMI poursuit son expansion",
    date: "2025-10-28",
    issuer: "SMI",
    sector: "Mines",
    link: "https://www.casablanca-bourse.com"
  },
  {
    title: "Hausse attendue des dividendes pour le secteur bancaire",
    date: "2025-10-27",
    issuer: "BOURSE DE CASABLANCA",
    sector: "Banques",
    link: "https://www.casablanca-bourse.com"
  },
  {
    title: "Le MASI franchit un nouveau seuil historique",
    date: "2025-10-26",
    issuer: "BOURSE DE CASABLANCA",
    sector: "Marché",
    link: "https://www.casablanca-bourse.com"
  }
];

let newsUpdateInterval = null;

// State
let currentFilter = "Tous";
let currentPerformanceFilter = "all";
let currentSearch = "";
let currentTheme = "light";
let currentOpenStock = null;
let currentChart = null;
let currentChartData = null;
let currentPeriod = '1M';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initClock();
  initHeroClock();
  initHeroSearch();
  initHeroThemeToggle();
  renderIndices();
  initPerformanceFilter();
  initSectorFilter();
  initEventListeners();
  renderStocks();
  updateStatistics();
  updateFilterInfo();
  renderNews();
  updateNewsTime();
  
  // Auto-update news every 10 minutes
  newsUpdateInterval = setInterval(() => {
    refreshNews(true);
  }, 10 * 60 * 1000);
  
  // Add entrance animations to stats cards
  setTimeout(() => {
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`;
    });
  }, 100);
});

// Generate OHLC Data for candlestick chart
function generateOHLCData(stock, days = 180) {
  const data = [];
  const currentPrice = stock.last;
  const volatility = Math.abs(stock.change_pct) / 100 || 0.02;
  
  const endDate = new Date();
  let price = currentPrice * 0.85; // Start from lower price to show growth
  
  // Generate historical data going backwards
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(endDate);
    date.setDate(date.getDate() - i);
    
    // Skip weekends
    if (date.getDay() === 0 || date.getDay() === 6) {
      continue;
    }
    
    // Random walk with mean reversion towards current price
    const drift = (currentPrice - price) * 0.008; // Pull towards current price
    const randomChange = (Math.random() - 0.5) * volatility * 2;
    const dailyChange = drift + randomChange;
    
    const open = price;
    const close = open * (1 + dailyChange);
    
    // Ensure realistic high/low based on whether bullish or bearish
    let high, low;
    if (close > open) {
      // Bullish candle
      high = Math.max(open, close) * (1 + Math.random() * volatility * 0.5);
      low = Math.min(open, close) * (1 - Math.random() * volatility * 0.3);
    } else {
      // Bearish candle
      high = Math.max(open, close) * (1 + Math.random() * volatility * 0.3);
      low = Math.min(open, close) * (1 - Math.random() * volatility * 0.5);
    }
    
    // Generate realistic volume
    const baseVolume = stock.volume || 1000;
    const volume = Math.floor(baseVolume * (0.5 + Math.random() * 1.5));
    
    data.push({
      x: date.getTime(),
      y: [parseFloat(open.toFixed(2)), parseFloat(high.toFixed(2)), parseFloat(low.toFixed(2)), parseFloat(close.toFixed(2))],
      volume: volume
    });
    
    price = close;
  }
  
  return data;
}

// Filter data by period
function filterDataByPeriod(data, period) {
  const now = Date.now();
  let cutoffDate;
  
  switch(period) {
    case '1D':
      cutoffDate = now - (1 * 24 * 60 * 60 * 1000);
      break;
    case '1W':
      cutoffDate = now - (7 * 24 * 60 * 60 * 1000);
      break;
    case '1M':
      cutoffDate = now - (30 * 24 * 60 * 60 * 1000);
      break;
    case '3M':
      cutoffDate = now - (90 * 24 * 60 * 60 * 1000);
      break;
    case '6M':
      cutoffDate = now - (180 * 24 * 60 * 60 * 1000);
      break;
    case '1Y':
      cutoffDate = now - (365 * 24 * 60 * 60 * 1000);
      break;
    default:
      return data;
  }
  
  return data.filter(d => d.x >= cutoffDate);
}

// Chart data cache
const chartDataCache = {};

// Theme Management
function initTheme() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  currentTheme = prefersDark ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
}

function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
}

// Clock
function initClock() {
  updateClock();
  setInterval(updateClock, 1000);
}

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const clockEl = document.getElementById('clock');
  if (clockEl) {
    clockEl.textContent = `${hours}:${minutes}:${seconds}`;
  }
}

// Hero Clock
function initHeroClock() {
  updateHeroClock();
  setInterval(updateHeroClock, 1000);
}

function updateHeroClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const heroClockEl = document.getElementById('heroClock');
  if (heroClockEl) {
    heroClockEl.textContent = `${hours}:${minutes}:${seconds}`;
  }
}

// Hero Search
function initHeroSearch() {
  const heroSearchInput = document.getElementById('heroSearchInput');
  if (heroSearchInput) {
    heroSearchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value.toLowerCase();
      // Also update main search
      const mainSearch = document.getElementById('searchInput');
      if (mainSearch) {
        mainSearch.value = e.target.value;
      }
      renderStocksWithAnimation();
      updateFilterInfo();
    });
  }
}

// Hero Theme Toggle
function initHeroThemeToggle() {
  const heroThemeToggle = document.getElementById('heroThemeToggle');
  if (heroThemeToggle) {
    heroThemeToggle.addEventListener('click', toggleTheme);
  }
}

// Performance Filter
function initPerformanceFilter() {
  const filterContainer = document.getElementById('performanceFilter');
  performanceFilters.forEach(filter => {
    const button = document.createElement('button');
    button.className = `performance-btn ${filter.key === 'all' ? 'active' : ''}`;
    button.setAttribute('data-filter', filter.key);
    button.innerHTML = `
      <span class="performance-btn-icon">${filter.icon}</span>
      <span>${filter.label}</span>
      <span class="performance-btn-badge" data-count="0">0</span>
    `;
    button.addEventListener('click', () => filterByPerformance(filter.key));
    filterContainer.appendChild(button);
  });
  updateFilterCounts();
}

function filterByPerformance(performanceKey) {
  currentPerformanceFilter = performanceKey;
  
  // Update active button
  document.querySelectorAll('.performance-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-filter') === performanceKey);
  });
  
  renderStocksWithAnimation();
  updateFilterInfo();
}

function updateFilterCounts() {
  performanceFilters.forEach(filter => {
    const count = getFilteredStocksByPerformance(filter.key).length;
    const button = document.querySelector(`.performance-btn[data-filter="${filter.key}"]`);
    if (button) {
      const badge = button.querySelector('.performance-btn-badge');
      if (badge) {
        badge.textContent = count;
        badge.setAttribute('data-count', count);
      }
    }
  });
}

function getFilteredStocksByPerformance(performanceKey) {
  return stocksData.filter(stock => {
    if (performanceKey === 'all') return true;
    if (performanceKey === 'up') return stock.change_pct > 0;
    if (performanceKey === 'down') return stock.change_pct < 0;
    if (performanceKey === 'stable') return Math.abs(stock.change_pct) <= STABLE_THRESHOLD;
    return true;
  });
}

function updateFilterInfo() {
  const infoEl = document.getElementById('filterInfo');
  const filteredStocks = getFilteredStocks();
  const totalStocks = stocksData.length;
  
  if (currentPerformanceFilter === 'all' && currentFilter === 'Tous' && currentSearch === '') {
    infoEl.classList.add('hidden');
    return;
  }
  
  infoEl.classList.remove('hidden');
  
  let filterText = '';
  if (currentPerformanceFilter !== 'all') {
    const perfFilter = performanceFilters.find(f => f.key === currentPerformanceFilter);
    filterText = perfFilter ? perfFilter.label.toLowerCase() : '';
  }
  
  let sectorText = currentFilter !== 'Tous' ? ` • ${currentFilter}` : '';
  
  if (filteredStocks.length === 0) {
    infoEl.innerHTML = `Aucune action trouvée`;
  } else if (filteredStocks.length === totalStocks) {
    infoEl.innerHTML = `Affichage de toutes les actions (${filteredStocks.length})`;
  } else {
    infoEl.innerHTML = `Affichage ${filteredStocks.length} action${filteredStocks.length > 1 ? 's' : ''} ${filterText}${sectorText}`;
  }
}

// Sector Filter
function initSectorFilter() {
  const filterContainer = document.getElementById('sectorFilter');
  sectors.forEach(sector => {
    const button = document.createElement('button');
    button.className = `sector-btn ${sector === 'Tous' ? 'active' : ''}`;
    button.textContent = sector;
    button.addEventListener('click', () => filterBySector(sector));
    filterContainer.appendChild(button);
  });
}

function filterBySector(sector) {
  currentFilter = sector;
  
  // Update active button
  document.querySelectorAll('.sector-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent === sector);
  });
  
  renderStocksWithAnimation();
  updateFilterInfo();
}

// Event Listeners
function initEventListeners() {
  // Theme toggle
  document.getElementById('themeToggle').addEventListener('click', toggleTheme);
  
  // Refresh button
  document.getElementById('refreshBtn').addEventListener('click', refreshData);
  
  // Search
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value.toLowerCase();
      // Also update hero search
      const heroSearch = document.getElementById('heroSearchInput');
      if (heroSearch) {
        heroSearch.value = e.target.value;
      }
      renderStocksWithAnimation();
      updateFilterInfo();
    });
  }
  
  // Modal close
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('detailModal').addEventListener('click', (e) => {
    if (e.target.id === 'detailModal') closeModal();
  });
  
  // ESC key to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (document.getElementById('detailModal').classList.contains('active')) {
        closeModal();
      }
      if (document.getElementById('indexModal').classList.contains('active')) {
        closeIndexModal();
      }
    }
  });
  
  // Index modal close
  document.getElementById('indexModalClose').addEventListener('click', closeIndexModal);
  document.getElementById('indexModal').addEventListener('click', (e) => {
    if (e.target.id === 'indexModal') closeIndexModal();
  });
  
  // Refresh news button
  document.getElementById('refreshNewsBtn').addEventListener('click', () => refreshNews(false));
}

// Render Stocks
function renderStocks() {
  const container = document.getElementById('stocksGrid');
  const filteredStocks = getFilteredStocks();
  
  container.innerHTML = '';
  
  if (filteredStocks.length === 0) {
    // Show empty state
    const emptyState = createEmptyState();
    container.appendChild(emptyState);
  } else {
    filteredStocks.forEach((stock, index) => {
      const card = createStockCard(stock, index);
      container.appendChild(card);
      
      // Add slight random rotation for visual interest
      const randomRotation = (Math.random() - 0.5) * 0.5;
      card.style.setProperty('--random-rotation', `${randomRotation}deg`);
    });
  }
  
  updateStatistics();
  updateFilterCounts();
}

// Render stocks with smooth animations
function renderStocksWithAnimation() {
  const container = document.getElementById('stocksGrid');
  const existingCards = Array.from(container.querySelectorAll('.stock-card'));
  const filteredStocks = getFilteredStocks();
  
  // Fade out existing cards
  if (existingCards.length > 0) {
    existingCards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('fade-out');
      }, index * 30);
    });
    
    // Wait for fade out to complete, then render new cards
    setTimeout(() => {
      container.innerHTML = '';
      
      if (filteredStocks.length === 0) {
        const emptyState = createEmptyState();
        container.appendChild(emptyState);
      } else {
        filteredStocks.forEach((stock, index) => {
          const card = createStockCard(stock, index);
          card.classList.add('fade-in');
          card.style.animationDelay = `${index * 0.05}s`;
          container.appendChild(card);
        });
      }
      
      updateStatistics();
      updateFilterCounts();
      updateFilterInfo();
    }, existingCards.length * 30 + 300);
  } else {
    // No existing cards, just render
    renderIndices();
    renderStocks();
    updateFilterCounts();
  }
}

function createEmptyState() {
  const emptyState = document.createElement('div');
  emptyState.className = 'empty-state';
  emptyState.style.gridColumn = '1 / -1';
  
  const perfFilter = performanceFilters.find(f => f.key === currentPerformanceFilter);
  const filterName = perfFilter ? perfFilter.label.toLowerCase() : '';
  
  emptyState.innerHTML = `
    <div class="empty-state-icon">😔</div>
    <h3 class="empty-state-title">Aucune action trouvée</h3>
    <p class="empty-state-message">Aucune action ne correspond aux filtres sélectionnés ${filterName ? `(${filterName})` : ''}.</p>
    <button class="empty-state-button" onclick="resetFilters()">↺ Réinitialiser les filtres</button>
  `;
  
  return emptyState;
}

function resetFilters() {
  currentFilter = 'Tous';
  currentPerformanceFilter = 'all';
  currentSearch = '';
  
  // Update UI
  document.querySelectorAll('.sector-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent === 'Tous');
  });
  
  document.querySelectorAll('.performance-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-filter') === 'all');
  });
  
  document.getElementById('searchInput').value = '';
  
  renderStocksWithAnimation();
  updateFilterInfo();
}

function getFilteredStocks() {
  return stocksData.filter(stock => {
    // Sector filter
    const matchesFilter = currentFilter === 'Tous' || stock.sector === currentFilter;
    
    // Search filter
    const matchesSearch = stock.instrument.toLowerCase().includes(currentSearch) ||
                         stock.symbol.toLowerCase().includes(currentSearch);
    
    // Performance filter
    let matchesPerformance = true;
    if (currentPerformanceFilter === 'up') {
      matchesPerformance = stock.change_pct > 0;
    } else if (currentPerformanceFilter === 'down') {
      matchesPerformance = stock.change_pct < 0;
    } else if (currentPerformanceFilter === 'stable') {
      matchesPerformance = Math.abs(stock.change_pct) <= STABLE_THRESHOLD;
    }
    
    return matchesFilter && matchesSearch && matchesPerformance;
  });
}

function createStockCard(stock, index) {
  const card = document.createElement('div');
  card.className = 'stock-card';
  card.style.animationDelay = `${index * 0.08}s`;
  card.addEventListener('click', () => openModal(stock));
  
  const changeClass = stock.change_abs > 0 ? 'positive' : stock.change_abs < 0 ? 'negative' : 'neutral';
  const changeIcon = stock.change_abs > 0 ? '↑' : stock.change_abs < 0 ? '↓' : '•';
  const sectorClass = stock.sector.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '').replace(/&/g, '');
  
  // Generate trend bars with animation delays
  const trendBars = generateTrendBars(stock.change_pct, index);
  
  card.innerHTML = `
    <div class="stock-header">
      <div class="company-logo-container">
        <div class="company-logo" data-symbol="${stock.symbol}">
          <img src="${stock.logo_url}" alt="Logo de ${stock.instrument}" title="${stock.instrument}" onerror="this.parentElement.classList.add('logo-error'); this.style.display='none';">
          <div class="logo-fallback">${stock.symbol}</div>
        </div>
      </div>
      <div class="stock-info">
        <div class="stock-name">${stock.instrument}</div>
        <div class="stock-symbol">${stock.symbol}</div>
      </div>
      <div class="sector-tag ${sectorClass}">${stock.sector}</div>
    </div>
    
    <div class="stock-price">
      <div class="price-current">${formatPrice(stock.last)} MAD</div>
      <div class="price-change ${changeClass}">
        <span>${changeIcon}</span>
        <span>${formatChange(stock.change_abs)} MAD (${formatPercent(stock.change_pct)}%)</span>
      </div>
    </div>
    
    <div class="trend-bar">
      ${trendBars}
    </div>
    
    <div class="stock-details">
      <div class="detail-item">
        <div class="detail-label">Volume</div>
        <div class="detail-value">${formatNumber(stock.volume)}</div>
      </div>
      <div class="detail-item">
        <div class="detail-label">Valeur</div>
        <div class="detail-value">${formatValue(stock.value)}</div>
      </div>
      <div class="detail-item">
        <div class="detail-label">Ouverture</div>
        <div class="detail-value">${formatPrice(stock.open)} MAD</div>
      </div>
      <div class="detail-item">
        <div class="detail-label">Référence</div>
        <div class="detail-value">${formatPrice(stock.ref)} MAD</div>
      </div>
    </div>
  `;
  
  return card;
}

function generateTrendBars(changePct, cardIndex = 0) {
  const bars = [];
  const baseHeight = 20;
  const volatility = Math.abs(changePct);
  
  for (let i = 0; i < 8; i++) {
    const variation = (Math.random() - 0.5) * volatility * 2;
    const height = Math.max(10, Math.min(40, baseHeight + variation * 2));
    const delay = (cardIndex * 0.08) + (i * 0.05);
    bars.push(`<div class="trend-bar-item" style="height: ${height}px; animation-delay: ${delay}s"></div>`);
  }
  
  return bars.join('');
}

// Statistics
function updateStatistics() {
  const filteredStocks = getFilteredStocks();
  const gainers = filteredStocks.filter(s => s.change_abs > 0).length;
  const losers = filteredStocks.filter(s => s.change_abs < 0).length;
  const totalVolume = filteredStocks.reduce((sum, s) => sum + s.volume, 0);
  
  document.getElementById('totalStocks').textContent = filteredStocks.length;
  document.getElementById('gainers').textContent = gainers;
  document.getElementById('losers').textContent = losers;
  document.getElementById('totalVolume').textContent = formatNumber(totalVolume);
}

// Modal
function openModal(stock) {
  const modal = document.getElementById('detailModal');
  const modalBody = document.getElementById('modalBody');
  currentOpenStock = stock;
  
  // Add body class to prevent scrolling
  document.body.style.overflow = 'hidden';
  
  const changeClass = stock.change_abs > 0 ? 'positive' : stock.change_abs < 0 ? 'negative' : 'neutral';
  const changeIcon = stock.change_abs > 0 ? '↑' : stock.change_abs < 0 ? '↓' : '•';
  const sectorClass = stock.sector.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '').replace(/&/g, '');
  
  // Format last update
  const updateTime = new Date().toLocaleString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  
  // Two-column layout with candlestick chart
  modalBody.innerHTML = `
    <div class="modal-header">
      <div class="modal-header-top">
        <div class="modal-logo-container">
          <div class="modal-logo" data-symbol="${stock.symbol}">
            <img src="${stock.logo_url}" alt="Logo de ${stock.instrument}" title="${stock.instrument}" onerror="this.parentElement.classList.add('logo-error'); this.style.display='none';">
            <div class="logo-fallback">${stock.symbol}</div>
          </div>
        </div>
        <div class="modal-header-text">
          <h2 class="modal-title">${stock.instrument} <span style="font-size: var(--font-size-lg); color: var(--color-text-secondary); font-weight: var(--font-weight-medium);">(${stock.symbol})</span></h2>
          <p class="modal-subtitle">Secteur: ${stock.sector}</p>
        </div>
      </div>
    </div>
    
    <div class="modal-price">
      <div>
        <div style="font-size: var(--font-size-sm); color: var(--color-text-secondary); margin-bottom: var(--space-4);">Prix Actuel</div>
        <div class="price-current" style="font-size: 48px; margin-bottom: 0;">${formatPrice(stock.last)} MAD</div>
      </div>
      <div class="price-change ${changeClass}" style="font-size: var(--font-size-lg); padding: var(--space-12) var(--space-24);">
        <span style="font-size: var(--font-size-2xl);">${changeIcon}</span>
        <span>${formatChange(stock.change_abs)} MAD (${formatPercent(stock.change_pct)}%)</span>
      </div>
    </div>
    
    <div class="modal-two-column">
      <div class="modal-left-section">
        <div class="modal-details">
          <div class="detail-item">
            <div class="detail-label">Prix d'Ouverture</div>
            <div class="detail-value">${formatPrice(stock.open)} MAD</div>
          </div>
          <div class="detail-item">
            <div class="detail-label">Prix de Référence</div>
            <div class="detail-value">${formatPrice(stock.ref)} MAD</div>
          </div>
          <div class="detail-item">
            <div class="detail-label">Volume</div>
            <div class="detail-value">${formatNumber(stock.volume)}</div>
          </div>
          <div class="detail-item">
            <div class="detail-label">Valeur Échangée</div>
            <div class="detail-value">${formatValue(stock.value)}</div>
          </div>
          <div class="detail-item">
            <div class="detail-label">Secteur</div>
            <div class="detail-value">${stock.sector}</div>
          </div>
          <div class="detail-item">
            <div class="detail-label">Mise à jour</div>
            <div class="detail-value" style="font-size: var(--font-size-sm);">${updateTime}</div>
          </div>
        </div>
      </div>
      
      <div class="modal-right-section">
        <div class="chart-container">
          <div class="chart-controls">
            <h3 style="margin: 0; font-size: var(--font-size-lg); font-weight: var(--font-weight-semibold); color: var(--color-text);">${stock.symbol} - Graphique Candlestick</h3>
            <div class="period-selector" id="periodSelector">
              <button class="period-btn" data-period="1W">1S</button>
              <button class="period-btn active" data-period="1M">1M</button>
              <button class="period-btn" data-period="3M">3M</button>
              <button class="period-btn" data-period="6M">6M</button>
            </div>
          </div>
          <div class="chart-canvas-wrapper" id="chartWrapper">
            <!-- Chart will be rendered here -->
          </div>
        </div>
      </div>
    </div>
  `;

  
  modal.classList.add('active');
  
  // Initialize candlestick chart
  initCandlestickChart(stock);
  
  // Setup period selector
  setupPeriodSelector(stock);
}

function closeModal() {
  const modal = document.getElementById('detailModal');
  modal.classList.remove('active');
  currentOpenStock = null;
  
  // Re-enable body scrolling
  document.body.style.overflow = '';
  
  // Clean up chart
  if (currentChart) {
    currentChart.destroy();
    currentChart = null;
  }
  currentChartData = null;
}

// Initialize candlestick chart with ApexCharts
function initCandlestickChart(stock) {
  // Generate or use cached data
  if (!chartDataCache[stock.symbol]) {
    chartDataCache[stock.symbol] = generateOHLCData(stock, 180);
  }
  
  currentChartData = chartDataCache[stock.symbol];
  currentPeriod = '1M';
  
  renderCandlestickChart(stock);
}

// Setup period selector buttons
function setupPeriodSelector(stock) {
  const periodButtons = document.querySelectorAll('.period-btn');
  
  periodButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      periodButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Update period and re-render
      currentPeriod = btn.getAttribute('data-period');
      renderCandlestickChart(stock);
    });
  });
}

// Render candlestick chart with ApexCharts
function renderCandlestickChart(stock) {
  if (currentChart) {
    currentChart.destroy();
    currentChart = null;
  }
  
  const chartWrapper = document.getElementById('chartWrapper');
  if (!chartWrapper) return;
  
  // Clear and create chart container
  chartWrapper.innerHTML = '<div id="apexchart"></div>';
  
  // Filter data by selected period
  const filteredData = filterDataByPeriod(currentChartData, currentPeriod);
  
  // Prepare volume data
  const volumeData = filteredData.map(d => ({
    x: d.x,
    y: d.volume
  }));
  
  // Chart theme colors
  const isDark = currentTheme === 'dark';
  const textColor = isDark ? '#f5f5f5' : '#134252';
  const gridColor = isDark ? 'rgba(119, 124, 124, 0.2)' : 'rgba(94, 82, 64, 0.15)';
  const bgColor = isDark ? 'transparent' : 'transparent';
  
  const options = {
    chart: {
      type: 'candlestick',
      height: '100%',
      background: bgColor,
      toolbar: {
        show: true,
        tools: {
          download: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: true
        },
        autoSelected: 'pan',
        offsetY: 0
      },
      zoom: {
        enabled: true
      },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800
      }
    },
    series: [{
      name: stock.symbol,
      data: filteredData
    }],
    plotOptions: {
      candlestick: {
        colors: {
          upward: '#10b981',
          downward: '#ef4444'
        },
        wick: {
          useFillColor: true
        }
      }
    },
    title: {
      text: `${stock.symbol} - Graphique Candlestick`,
      align: 'left',
      style: {
        fontSize: '16px',
        fontWeight: 600,
        color: textColor
      }
    },
    xaxis: {
      type: 'datetime',
      labels: {
        style: {
          colors: textColor
        },
        datetimeFormatter: {
          year: 'yyyy',
          month: 'MMM yyyy',
          day: 'dd MMM',
          hour: 'HH:mm'
        }
      },
      axisBorder: {
        color: gridColor
      },
      axisTicks: {
        color: gridColor
      }
    },
    yaxis: {
      tooltip: {
        enabled: true
      },
      labels: {
        style: {
          colors: textColor
        },
        formatter: function(val) {
          return val.toFixed(2) + ' MAD';
        }
      }
    },
    grid: {
      borderColor: gridColor,
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      }
    },
    tooltip: {
      theme: isDark ? 'dark' : 'light',
      custom: function({seriesIndex, dataPointIndex, w}) {
        const data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];
        const date = new Date(data.x);
        const dateStr = date.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' });
        
        return `
          <div style="padding: 12px; font-size: 13px;">
            <div style="font-weight: 600; margin-bottom: 8px; color: ${textColor};">${dateStr}</div>
            <div style="display: grid; grid-template-columns: auto auto; gap: 8px; color: ${textColor};">
              <span>Ouverture:</span><span style="font-weight: 600;">${data.y[0].toFixed(2)} MAD</span>
              <span>Plus haut:</span><span style="font-weight: 600; color: #10b981;">${data.y[1].toFixed(2)} MAD</span>
              <span>Plus bas:</span><span style="font-weight: 600; color: #ef4444;">${data.y[2].toFixed(2)} MAD</span>
              <span>Clôture:</span><span style="font-weight: 600;">${data.y[3].toFixed(2)} MAD</span>
              <span>Volume:</span><span style="font-weight: 600;">${formatNumber(data.volume)}</span>
            </div>
          </div>
        `;
      }
    },
    legend: {
      show: false
    }
  };
  
  const chartElement = document.querySelector('#apexchart');
  if (chartElement) {
    currentChart = new ApexCharts(chartElement, options);
    currentChart.render();
  }
}

// Render Indices
function renderIndices() {
  const container = document.getElementById('indicesSection');
  container.innerHTML = '';
  
  indicesData.forEach((index, idx) => {
    const indexCard = createIndexCard(index, idx);
    container.appendChild(indexCard);
  });
}

function createIndexCard(index, cardIndex) {
  const card = document.createElement('div');
  const indexClass = index.name === 'MASI' ? 'masi' : 'masi20';
  card.className = `index-card ${indexClass}`;
  card.style.animationDelay = `${cardIndex * 0.15}s`;
  
  const changeClass = index.change > 0 ? 'positive' : 'negative';
  const changeIcon = index.change > 0 ? '↑' : '↓';
  
  // Generate sparkline bars
  const sparklineBars = generateIndexSparkline(index.sparkline, cardIndex);
  
  // Format last update time
  const updateTime = new Date(index.last_update).toLocaleTimeString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit'
  });
  
  // Create icon based on index type
  const indexIcon = index.name === 'MASI' ? `
    <svg class="index-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
      <polyline points="17 6 23 6 23 12"/>
    </svg>
  ` : `
    <svg class="index-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <text x="12" y="18" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">20</text>
      <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" stroke-width="2" fill="none"/>
    </svg>
  `;
  
  card.innerHTML = `
    <div class="index-card-content">
      <div class="index-header">
        <div class="index-info">
          <h2 class="index-name">${index.name}</h2>
        </div>
      </div>
      
      <div class="index-value-section">
        <div class="index-current-value" data-target="${index.current_value}">${formatIndexValue(index.previous_close)}</div>
        <div class="index-change-container ${changeClass}">
          <span class="index-change-icon">${changeIcon}</span>
          <span>${formatChange(index.change)} (${formatPercent(index.change_pct)}%)</span>
        </div>
      </div>
    </div>
  `;
  
  // Animate value counter after render
  setTimeout(() => {
    const valueElement = card.querySelector('.index-current-value');
    animateIndexValue(valueElement, index.previous_close, index.current_value);
  }, 500 + cardIndex * 200);
  
  return card;
}

function generateIndexSparkline(data, cardIndex) {
  const bars = [];
  const maxValue = Math.max(...data);
  const minValue = Math.min(...data);
  const range = maxValue - minValue;
  
  data.forEach((value, i) => {
    const normalizedHeight = ((value - minValue) / range) * 60 + 20;
    const delay = (cardIndex * 0.15) + (i * 0.08);
    bars.push(`<div class="index-sparkline-bar" style="height: ${normalizedHeight}px; animation-delay: ${delay}s" title="${formatIndexValue(value)}"></div>`);
  });
  
  return bars.join('');
}

function animateIndexValue(element, from, to) {
  const duration = 1500;
  const startTime = performance.now();
  const diff = to - from;
  
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function
    const easeProgress = progress < 0.5
      ? 4 * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;
    
    const currentValue = from + (diff * easeProgress);
    element.textContent = formatIndexValue(currentValue);
    
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  
  requestAnimationFrame(update);
}

function formatIndexValue(value) {
  return value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

// Index Composition Modal
function openIndexComposition() {
  const modal = document.getElementById('indexModal');
  const modalBody = document.getElementById('indexModalBody');
  
  document.body.style.overflow = 'hidden';
  
  modalBody.innerHTML = `
    <div class="index-modal-header">
      <h2 class="index-modal-title masi20">Composition du MASI 20</h2>
      <p class="index-modal-subtitle">Les 20 plus grandes entreprises cotées à la Bourse de Casablanca</p>
    </div>
    
    <table class="constituents-table">
      <thead>
        <tr>
          <th>Ticker</th>
          <th>Entreprise</th>
          <th>Secteur</th>
          <th>Poids (%)</th>
          <th>Cap. Boursière (Mds MAD)</th>
        </tr>
      </thead>
      <tbody>
        ${masi20Constituents.map((constituent, index) => `
          <tr style="animation-delay: ${index * 0.08}s">
            <td><span class="constituent-ticker">${constituent.ticker}</span></td>
            <td>${constituent.name}</td>
            <td>${constituent.sector}</td>
            <td>
              <div>
                <span class="constituent-weight">${constituent.weight.toFixed(2)}%</span>
                <div class="weight-bar-container">
                  <div class="weight-bar" style="width: ${(constituent.weight / 20.5) * 100}%"></div>
                </div>
              </div>
            </td>
            <td>${constituent.market_cap.toFixed(2)}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
  
  modal.classList.add('active');
}

function closeIndexModal() {
  const modal = document.getElementById('indexModal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Refresh Data
function refreshData() {
  const refreshBtn = document.getElementById('refreshBtn');
  const refreshIcon = refreshBtn.querySelector('.refresh-icon');
  const loadingOverlay = document.getElementById('loadingOverlay');
  
  refreshIcon.classList.add('spinning');
  loadingOverlay.classList.add('active');
  
  // Simulate data refresh with random price changes
  setTimeout(() => {
    // Update indices with small random changes
    indicesData.forEach(index => {
      const change = (Math.random() - 0.5) * 50;
      index.current_value = Math.max(index.current_value + change, 1);
      index.change = index.current_value - index.previous_close;
      index.change_pct = ((index.change / index.previous_close) * 100);
      
      // Update sparkline (add new value, remove oldest)
      index.sparkline.shift();
      index.sparkline.push(index.current_value);
    });
    
    stocksData.forEach(stock => {
      const change = (Math.random() - 0.5) * 5; // Random change between -2.5 and 2.5
      stock.last = Math.max(stock.last + change, 1);
      stock.change_abs = stock.last - stock.ref;
      stock.change_pct = ((stock.change_abs / stock.ref) * 100);
    });
    
    renderStocks();
    updateFilterCounts();
    
    // Update modal if open
    if (currentOpenStock) {
      const updatedStock = stocksData.find(s => s.symbol === currentOpenStock.symbol);
      if (updatedStock) {
        updateModalPrice(updatedStock);
      }
    }
    
    // Add pulse animation to updated cards with stagger
    document.querySelectorAll('.stock-card').forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('pulse');
        // Add a shimmer effect
        card.style.animation = 'none';
        setTimeout(() => {
          card.style.animation = '';
          card.classList.remove('pulse');
        }, 500);
      }, index * 60);
    });
    
    refreshIcon.classList.remove('spinning');
    loadingOverlay.classList.remove('active');
  }, 1500);
}

function updateModalPrice(stock) {
  const changeClass = stock.change_abs > 0 ? 'positive' : stock.change_abs < 0 ? 'negative' : 'neutral';
  const changeIcon = stock.change_abs > 0 ? '↑' : stock.change_abs < 0 ? '↓' : '•';
  
  // Format last update
  const updateTime = new Date().toLocaleString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  
  const modalPrice = document.querySelector('.modal-price');
  if (modalPrice) {
    modalPrice.innerHTML = `
      <div>
        <div style="font-size: var(--font-size-sm); color: var(--color-text-secondary); margin-bottom: var(--space-4);">Prix Actuel</div>
        <div class="price-current" style="font-size: 48px; margin-bottom: 0;">${formatPrice(stock.last)} MAD</div>
      </div>
      <div class="price-change ${changeClass}" style="font-size: var(--font-size-lg); padding: var(--space-12) var(--space-24);">
        <span style="font-size: var(--font-size-2xl);">${changeIcon}</span>
        <span>${formatChange(stock.change_abs)} MAD (${formatPercent(stock.change_pct)}%)</span>
      </div>
    `;
    
    // Update detail values
    const detailItems = document.querySelectorAll('.modal-details .detail-item');
    if (detailItems.length >= 6) {
      detailItems[0].querySelector('.detail-value').textContent = formatPrice(stock.open) + ' MAD';
      detailItems[1].querySelector('.detail-value').textContent = formatPrice(stock.ref) + ' MAD';
      detailItems[2].querySelector('.detail-value').textContent = formatNumber(stock.volume);
      detailItems[3].querySelector('.detail-value').textContent = formatValue(stock.value);
      detailItems[4].querySelector('.detail-value').textContent = stock.sector;
      detailItems[5].querySelector('.detail-value').textContent = updateTime;
    }
  }
}

// Formatting Helpers
function formatPrice(price) {
  return price.toFixed(2);
}

function formatChange(change) {
  return (change >= 0 ? '+' : '') + change.toFixed(2);
}

function formatPercent(percent) {
  return (percent >= 0 ? '+' : '') + percent.toFixed(2);
}

function formatNumber(num) {
  return num.toLocaleString('fr-FR');
}

function formatValue(value) {
  if (value >= 1000000) {
    return (value / 1000000).toFixed(2) + 'M';
  } else if (value >= 1000) {
    return (value / 1000).toFixed(0) + 'K';
  }
  return value.toFixed(0);
}

// News Functions
function renderNews() {
  const newsCarousel = document.getElementById('newsCarousel');
  
  if (!newsCarousel) return;
  
  newsCarousel.innerHTML = '';
  
  if (newsData.length === 0) {
    newsCarousel.innerHTML = `
      <div class="news-empty">
        <div class="news-empty-icon">📰</div>
        <p class="news-empty-message">Aucune actualité disponible pour le moment.</p>
      </div>
    `;
    return;
  }
  
  newsData.forEach((news, index) => {
    const newsCard = createNewsCard(news, index);
    newsCarousel.appendChild(newsCard);
  });
  
  updateNewsTime();
}

function createNewsCard(news, index) {
  const card = document.createElement('div');
  card.className = 'news-card';
  card.style.animationDelay = `${index * 0.08}s`;
  
  // Check if news is new (within last 3 days)
  const newsDate = new Date(news.date);
  const today = new Date();
  const daysDiff = Math.floor((today - newsDate) / (1000 * 60 * 60 * 24));
  const isNew = daysDiff <= 3;
  
  // Format date
  const formattedDate = formatNewsDate(news.date);
  
  // Get sector class
  const sectorClass = getSectorClass(news.sector);
  
  // Get issuer initials for icon
  const issuerInitials = getIssuerInitials(news.issuer);
  
  // Get issuer icon color based on sector
  const iconColor = getSectorColor(news.sector);
  
  card.innerHTML = `
    <div class="news-card-header">
      <div class="news-meta">
        <div class="news-date">${formattedDate}</div>
        <div class="news-issuer">
          <span class="issuer-icon" style="background: ${iconColor}; color: white;">${issuerInitials}</span>
          ${news.issuer}
        </div>
      </div>
      ${isNew ? '<span class="news-badge new">NEW</span>' : ''}
    </div>
    
    <h3 class="news-title-text">${news.title}</h3>
    
    <div class="news-footer">
      <span class="news-sector-tag ${sectorClass}">${news.sector}</span>
      <a href="${news.link}" target="_blank" class="news-read-more" onclick="event.stopPropagation();">
        Lire plus
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"/>
          <polyline points="12 5 19 12 12 19"/>
        </svg>
      </a>
    </div>
  `;
  
  // Add click handler to open link
  card.addEventListener('click', (e) => {
    if (!e.target.closest('.news-read-more')) {
      window.open(news.link, '_blank');
    }
  });
  
  return card;
}

function formatNewsDate(dateString) {
  const date = new Date(dateString);
  const options = { day: '2-digit', month: 'short', year: 'numeric' };
  return date.toLocaleDateString('fr-FR', options);
}

function getSectorClass(sector) {
  return sector.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '').replace(/&/g, '');
}

function getIssuerInitials(issuer) {
  const words = issuer.split(' ');
  if (words.length >= 2) {
    return (words[0][0] + words[1][0]).toUpperCase();
  }
  return issuer.substring(0, 2).toUpperCase();
}

function getSectorColor(sector) {
  const sectorColors = {
    'Banques': '#1a73e8',
    'Télécoms': '#10b981',
    'Telecoms': '#10b981',
    'Agroalimentaire': '#ef4444',
    'Mines': '#7c3aed',
    'Technologie': '#f59e0b',
    'Marché': '#ec4899',
    'Services financiers': '#6366f1'
  };
  return sectorColors[sector] || '#6b7280';
}

function updateNewsTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const timeElement = document.getElementById('newsUpdateTime');
  if (timeElement) {
    timeElement.textContent = `Mis à jour: ${hours}:${minutes}`;
  }
}

function refreshNews(isAuto = false) {
  const refreshBtn = document.getElementById('refreshNewsBtn');
  const refreshIcon = refreshBtn?.querySelector('.refresh-icon');
  const newsCarousel = document.getElementById('newsCarousel');
  
  if (!newsCarousel) return;
  
  if (refreshIcon) {
    refreshIcon.classList.add('spinning');
  }
  
  // Show loading state
  if (!isAuto) {
    newsCarousel.innerHTML = `
      <div class="news-loading">
        <div class="spinner"></div>
        <p style="color: var(--color-text-secondary); margin: 0;">Chargement des actualités...</p>
      </div>
    `;
  }
  
  // Simulate news refresh (in real app, this would be an API call)
  setTimeout(() => {
    // In a real application, you would fetch new news data here
    // For now, we just shuffle the existing news
    newsData.sort(() => Math.random() - 0.5);
    
    renderNews();
    updateNewsTime();
    
    if (refreshIcon) {
      refreshIcon.classList.remove('spinning');
    }
    
    // Add pulse animation to news cards
    if (!isAuto) {
      document.querySelectorAll('.news-card').forEach((card, index) => {
        setTimeout(() => {
          card.classList.add('pulse');
          setTimeout(() => {
            card.classList.remove('pulse');
          }, 500);
        }, index * 60);
      });
    }
  }, isAuto ? 500 : 1500);
}

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
  if (newsUpdateInterval) {
    clearInterval(newsUpdateInterval);
  }
});