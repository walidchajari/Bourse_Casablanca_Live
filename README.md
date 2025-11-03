# 🏦 Bourse de Casablanca – Marché des Actions en Direct

Une application web moderne et interactive permettant de **suivre en temps réel les actions cotées à la Bourse de Casablanca (Maroc)**.
Elle offre une **interface élégante en mode sombre**, des **cartes dynamiques pour chaque banque**, et un **rafraîchissement automatique des données** pour suivre l’évolution du marché instantanément.


## 🚀 Fonctionnalités principales

* 📊 **Affichage en direct des cours** des principales banques marocaines (ATW, BCP, BOA, CIH, CDM, BMCI…)
* 💸 **Mise à jour dynamique** des prix, volumes, et variations (+/- en MAD et en %)
* 🌗 **Mode sombre / clair** avec bascule instantanée
* ⏱️ **Horloge temps réel** intégrée à l’interface
* 🔍 **Barre de recherche** pour filtrer une action par nom ou symbole
* 🎨 **Design moderne et responsive** (UI en dégradés violets et néons)
* 🔄 **Actualisation automatique** des données du marché




## 🛠️ Technologies utilisées

| Frontend                     | Backend                            | Autres                             |
| ---------------------------- | ---------------------------------- | ---------------------------------- |
| ⚛️ React.js (ou HTML/CSS/JS) | 🌐 API temps réel (ou JSON local)  | 🕶️ TailwindCSS / CSS personnalisé |
| 📱 Responsive Design         | ⚙️ Node.js / Flask (selon version) | ⏰ JavaScript Date pour horloge     |



## 📂 Structure du projet

```
Bourse_Casablanca_Live/
│
├── index.html                # Page principale
├── style.css                 # Design global
├── script.js                 # Logique du marché (timer, données, etc.)
│
├── assets/                   # Images, icônes, logos
│   └── icons/...
│
├── data/                     # (Optionnel) Données JSON simulées
│   └── actions.json
│
└── README.md                 # Ce fichier
```



## ⚙️ Installation et exécution

### 1️⃣ Cloner le projet

```bash
git clone https://github.com/<ton-utilisateur>/Bourse_Casablanca_Live.git
cd Bourse_Casablanca_Live
```

### 2️⃣ Lancer le projet

#### Option 1 : Via navigateur

Ouvre simplement `index.html` dans ton navigateur.

#### Option 2 : Via serveur local (ex. Flask)

```bash
python app.py
```

Puis accède à [http://localhost:5000](http://localhost:5000)



## 💡 Améliorations futures

* 📈 Intégration d’une **API en temps réel** (Bourse Casablanca, Yahoo Finance, etc.)
* 🧠 Ajout d’un **moteur de prévision IA** des tendances du marché
* 📱 Version mobile optimisée (PWA)
* 🔔 Notifications push pour alertes de variation



## 👨‍💻 Auteur

**Walid Chajari**
💼 Étudiant passionné par la finance et le développement web
📧 [walidchajari@...com]




## 🪪 Licence

Ce projet est publié sous licence **MIT**.
Vous êtes libre de l’utiliser, le modifier et le distribuer à des fins éducatives ou personnelles.


