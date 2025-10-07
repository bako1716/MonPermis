# 🚗 MonPermis – Maîtrisez le Code de la Route avec Confiance

[![React Native](https://img.shields.io/badge/React%20Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactnative.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/)

---

## 🎯 Réussir l'examen du code n'a jamais été aussi simple

Imaginez pouvoir vous préparer à l'examen du code de la route depuis votre téléphone, n'importe où, n'importe quand. **MonPermis** transforme l'apprentissage fastidieux en une expérience moderne, interactive et efficace. Que vous soyez au début de votre formation ou en révision finale, cette application vous accompagne jusqu'à la réussite.

Conçue spécialement pour le public burkinabè et africain, MonPermis reproduit fidèlement les conditions réelles de l'examen avec un chronomètre, des questions illustrées et un système de notation instantané. Fini le stress de l'inconnu : entraînez-vous comme si vous y étiez !

---

## 📸 Captures d'écran

| Accueil | Interface de cours | Interface de test |
|----------|-------------------|-------------------|
| ![Accueil](https://github.com/bako1716/MonPermis/blob/master/screenshots/accuil.png?raw=true) | ![Cours](https://github.com/bako1716/MonPermis/blob/master/screenshots/cours_inteface.png?raw=true) | ![Test](https://github.com/bako1716/MonPermis/blob/master/screenshots/interface_test_series.png?raw=true) |

| Quiz 1 | Quiz 2 | Résultat détaillé |
|---------|---------|------------------|
| ![Quiz 1](https://github.com/bako1716/MonPermis/blob/master/screenshots/QUIZZ.png?raw=true) | ![Quiz 2](https://github.com/bako1716/MonPermis/blob/master/screenshots/QUIZZ2.png?raw=true) | ![Résultat détaillé](https://github.com/bako1716/MonPermis/blob/master/screenshots/RESLTAT%20DETAILLE.png?raw=true) |

| Résultat global | Interface web |
|------------------|---------------|
| ![Résultat](https://github.com/bako1716/MonPermis/blob/master/screenshots/RESULTAT.png?raw=true) | ![Interface web](https://github.com/bako1716/MonPermis/blob/master/screenshots/web_interface.png?raw=true) |

---

## ✨ Fonctionnalités principales

### 🎓 Simulation d'examen blanc chronométrée
- **Questions aléatoires** avec images réelles de situations routières
- **Chronomètre circulaire** de 20 secondes par question pour reproduire la pression de l'examen
- **Correction instantanée** avec identification des bonnes et mauvaises réponses
- **Score final détaillé** avec analyse question par question

### 📚 Apprentissage structuré
- **Menu des cours thématiques** (Panneaux, Priorités, Stationnement, etc.)
- **Séries d'entraînement** progressives (de 42 à 55)
- **Interface intuitive** adaptée aux débutants comme aux candidats avancés

### 🎨 Expérience utilisateur moderne
- Design responsive avec **NativeWind** (Tailwind CSS pour React Native)
- Animations fluides et transitions soignées
- Interface claire et épurée pour une concentration optimale
- Compatible **Android, iOS et Web**

### 📊 Suivi des performances
- Résultats globaux après chaque session
- Détails par question avec visualisation des erreurs
- Base solide pour l'ajout futur d'historiques et statistiques

---

## 🏗️ Architecture du projet

```
MonPermis/
├── backendMPermis/          # API REST Node.js + Express
│   ├── routes/
│   │   ├── photos.js        # Gestion des images
│   │   └── questions.js     # Gestion des questions/réponses
│   ├── models/              # Modèles Mongoose
│   └── server.js            # Point d'entrée du serveur
│
├── MonPermisFrontend/       # Application mobile React Native
│   ├── screens/
│   │   ├── HomeScreen.js    # Page d'accueil
│   │   ├── ExamenScreen.js  # Interface de quiz chronométré
│   │   ├── ResultsScreen.js # Résultats globaux
│   │   └── ResultatsDetailsScreen.js # Détails par question
│   ├── context/             # Gestion d'état (QuizContext)
│   └── components/          # Composants réutilisables
│
└── screenshots/             # Captures d'écran du projet
```

### Stack technologique

**Frontend Mobile**
- **React Native** via Expo pour le développement multiplateforme
- **Expo Router** pour la navigation
- **NativeWind** pour un design moderne et responsive
- **React Context API** pour la gestion d'état
- Animations avec React Native Animated et SVG

**Backend API**
- **Node.js** avec **Express.js** pour l'API REST
- **MongoDB** avec **Mongoose** pour la base de données NoSQL
- Architecture RESTful pour une communication fluide
- Middleware CORS pour la sécurité

**Base de données MongoDB**
```
Collections:
├── Photos          # Images des questions (URL + ID)
├── Questions       # Questions avec références aux photos
└── Options         # Réponses possibles et correctes
```

---

## 🚀 Installation et démarrage

### Prérequis
- Node.js (v14 ou supérieur)
- MongoDB (local ou Atlas)
- Expo CLI (`npm install -g expo-cli`)

### 1. Cloner le projet
```bash
git clone https://github.com/bako1716/MonPermis.git
cd MonPermis
```

### 2. Configuration du Backend
```bash
cd backendMPermis
npm install

# Créer un fichier .env basé sur .env.example
# Ajouter vos variables d'environnement :
# MONGODB_URI=mongodb://localhost:27017/monpermis
# PORT=3000

npm start
```

### 3. Configuration du Frontend
```bash
cd ../MonPermisFrontend
npm install

# Créer un fichier .env
# API_URL=http://localhost:3000

npx expo start
```

### 4. Lancer l'application
- Scannez le QR code avec l'app **Expo Go** (Android/iOS)
- Ou appuyez sur `w` pour ouvrir dans le navigateur
- Ou appuyez sur `a` pour lancer sur un émulateur Android

---

## 🎯 Fonctionnalités développées (MoSCoW)

### ✅ Must Have (Complété)
- ✅ Simulation d'examen blanc chronométré
- ✅ Affichage des photos dans les questions
- ✅ Affichage et sélection des réponses
- ✅ Calcul automatique du score
- ✅ Résultats globaux et détaillés

### 🔄 Should Have (En cours/planifié)
- 🚧 Mode entraînement libre par thème
- 📋 Système de progression et historique
- 📖 Bibliothèque complète des panneaux de signalisation
- 🎯 Séries thématiques progressives

### 💡 Could Have (Future)
- 🔊 Intégration audio pour les questions
- 👤 Personnalisation des profils utilisateurs
- 🌓 Mode sombre/clair automatique
- 🏆 Badges et récompenses

### ❌ Won't Have (Hors scope actuel)
- Mode multijoueur
- Reconnaissance vocale
- Réalité augmentée
- Intégration auto-écoles

---

## 📚 Ce que j'ai appris

Ce projet représente ma première expérience complète en développement fullstack mobile :

- 🎨 **Architecture d'applications mobiles** avec React Native et Expo
- 🔌 **Développement d'API REST** avec Node.js et Express
- 💾 **Gestion de bases de données NoSQL** avec MongoDB et Mongoose
- 🔄 **Communication client-serveur** et consommation d'API
- ⚡ **Gestion d'état** avec React Context API
- 🎯 **Logique métier complexe** (timer, scoring, randomisation)
- 📱 **Design responsive** et expérience utilisateur mobile

---

## 🔮 Perspectives d'évolution

### Phase 2
- Implémentation complète des séries de tests (42 à 55)
- Ajout de cours interactifs thématiques
- Module d'apprentissage dédié aux panneaux de signalisation
- Système de suivi des performances avec historique

### Phase 3
- Mode entraînement personnalisé selon les difficultés
- Notifications de révision intelligentes
- Export et partage des résultats
- Version premium avec contenu additionnel

### Objectif final
🎯 **Publier MonPermis sur le Play Store et en version Web** pour servir d'outil pédagogique accessible à tous les apprenants du code de la route, particulièrement au Burkina Faso et en Afrique francophone.

---

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
- 🐛 Signaler des bugs
- 💡 Proposer de nouvelles fonctionnalités
- 🔧 Soumettre des pull requests
- ⭐ Mettre une étoile si le projet vous plaît !

---

## 📄 Licence

Ce projet est développé dans un cadre académique et personnel.

---

## 👨‍💻 Auteur

**BAKOO**  
Développeur fullstack en apprentissage  
Premier projet web et mobile

📧 Contact : [Votre email]  
🔗 GitHub : [@bako1716](https://github.com/bako1716)

---

## 🙏 Remerciements

Merci à tous ceux qui ont contribué à ce projet d'apprentissage, ainsi qu'aux ressources open-source qui ont rendu ce développement possible.

---

> ⚠️ **Note importante** : Ne jamais commiter de clés API ou d'informations sensibles. Utilisez toujours un fichier `.env` (non versionné) basé sur `.env.example`.

---

<div align="center">

**Fait avec ❤️ pour faciliter l'apprentissage du code de la route**

[⬆ Retour en haut](#-monpermis--maîtrisez-le-code-de-la-route-avec-confiance)

</div>
