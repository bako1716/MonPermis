# 🚗 MonPermis - Application d'Apprentissage du Code de la Route

[![React Native](https://img.shields.io/badge/React%20Native-0.76.7-blue.svg)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-SDK%2052-000020.svg)](https://expo.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-green.svg)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen.svg)](https://www.mongodb.com/)

## 📋 Table des matières

- [À propos](#à-propos)
- [Fonctionnalités](#fonctionnalités)
- [Architecture](#architecture)
- [Technologies](#technologies)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Configuration](#configuration)
- [Démarrage](#démarrage)
- [Structure du projet](#structure-du-projet)
- [API Documentation](#api-documentation)
- [Contribution](#contribution)
- [Licence](#licence)

## 🎯 À propos

**MonPermis** est une application mobile interactive dédiée à l'apprentissage et à la préparation de l'examen du code de la route. Elle offre une solution moderne et flexible permettant aux utilisateurs de maîtriser les règles de conduite à leur propre rythme, sans nécessiter de déplacements quotidiens vers les centres d'examen traditionnels.

### Objectifs du projet

- 📚 Faciliter l'apprentissage du code de la route
- ⏰ Offrir une alternative flexible à la formation traditionnelle
- 📱 Permettre un apprentissage mobile accessible n'importe où
- 🎯 Augmenter les chances de réussite à l'examen
- 💡 Proposer une expérience d'apprentissage interactive et engageante

## ✨ Fonctionnalités

- 📸 **Quiz interactif** avec images de situations routières
- 🎓 **Questions d'examen** basées sur des scénarios réels
- 📊 **Suivi des progrès** et gestion des réponses
- 🌓 **Mode sombre/clair** pour un confort visuel optimal
- 📱 **Multi-plateforme** : iOS, Android et Web
- 🔄 **Synchronisation** avec une base de données cloud
- 🎨 **Interface intuitive** et moderne

## 🏗️ Architecture

Le projet est divisé en deux parties principales :

```
MonPermis/
├── backendMPermis/      # API REST (Node.js + Express + MongoDB)
└── MonPermisFrontend/   # Application mobile (React Native + Expo)
```

### Backend (API REST)

- **Framework** : Express.js
- **Base de données** : MongoDB
- **Architecture** : MVC (Model-View-Controller)
- **Fonctionnalités** :
  - Gestion des photos d'examen (40 images)
  - API REST pour questions et réponses
  - Stockage et récupération des données

### Frontend (Application Mobile)

- **Framework** : React Native avec Expo
- **Navigation** : React Navigation (Stack & Tabs)
- **State Management** : Context API (QuizContext)
- **UI/UX** : Composants personnalisés avec support du thème

## 🛠️ Technologies

### Backend
- **Runtime** : Node.js
- **Framework** : Express.js v4.21.2
- **Base de données** : MongoDB avec Mongoose v8.12.1
- **Middleware** : CORS, dotenv
- **Serveur de fichiers** : Express Static

### Frontend
- **Framework** : React Native 0.76.7
- **Plateforme** : Expo SDK 52
- **Langage** : TypeScript & JavaScript
- **Navigation** : React Navigation v7
- **Animations** : React Native Reanimated v3.16.1, Moti v0.30.0
- **UI Components** :
  - Expo Linear Gradient
  - React Native Vector Icons
  - React Native Progress
  - React Native SVG
- **Gestion d'état** : Context API

## 📦 Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- **Node.js** (v16 ou supérieur)
- **npm** ou **yarn**
- **MongoDB** (local ou Atlas)
- **Expo CLI** : `npm install -g expo-cli`
- **Git**

Pour le développement mobile :
- **iOS** : Xcode (macOS uniquement)
- **Android** : Android Studio avec SDK
- **Expo Go** (application mobile pour tester)

## 🚀 Installation

### 1. Cloner le repository

```bash
git clone https://github.com/votre-username/MonPermis.git
cd MonPermis
```

### 2. Installation du Backend

```bash
cd backendMPermis
npm install
```

### 3. Installation du Frontend

```bash
cd ../MonPermisFrontend
npm install
```

## ⚙️ Configuration

### Backend (.env)

Créez un fichier `.env` dans le dossier `backendMPermis/` :

```env
MONGO_URI=mongodb://localhost:27017/monpermis
# ou pour MongoDB Atlas :
# MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/monpermis

PORT=5000
NODE_ENV=development
```

### Frontend

Modifiez l'URL de l'API dans `fetch/api/fetchfetchQuestions.js` si nécessaire :

```javascript
const API_URL = 'http://localhost:5000'; // Pour développement local
// ou
const API_URL = 'https://votre-api.herokuapp.com'; // Pour production
```

## 🎬 Démarrage

### Démarrer le Backend

```bash
cd backendMPermis
npm start
```

Le serveur démarre sur `http://localhost:5000`

**Vérifier la connexion** :
- Test DB : `http://localhost:5000/test-db`
- Photos : `http://localhost:5000/photos`

### Démarrer le Frontend

```bash
cd MonPermisFrontend
npm start
```

Options de lancement :
- `npm run android` - Ouvrir sur Android
- `npm run ios` - Ouvrir sur iOS
- `npm run web` - Ouvrir dans le navigateur
- Scanner le QR code avec **Expo Go** (mobile)

## 📁 Structure du projet

### Backend

```
backendMPermis/
├── models/
│   ├── photo.js          # Modèle Photo
│   └── question.js       # Modèle Question
├── routes/
│   ├── photos.js         # Routes API photos
│   └── questions.js      # Routes API questions
├── upload/
│   └── photoexam/        # 40 images d'examen (1.jpg - 40.jpg)
├── .env                  # Variables d'environnement
├── Server.js             # Point d'entrée serveur
├── package.json
└── questions.json        # Données des questions
```

### Frontend

```
MonPermisFrontend/
├── app/
│   ├── (tabs)/
│   │   ├── _layout.tsx   # Navigation tabs
│   │   ├── index.tsx     # Écran d'accueil
│   │   └── explore.tsx   # Écran exploration
│   ├── _layout.tsx       # Layout principal
│   └── +not-found.tsx    # Page 404
├── assets/
│   ├── ExamPictures/     # Images locales
│   ├── fonts/            # Polices personnalisées
│   └── images/           # Assets graphiques
├── components/
│   ├── ui/               # Composants UI réutilisables
│   ├── ThemedText.tsx
│   ├── ThemedView.tsx
│   └── ...
├── context/
│   └── QuizContext.js    # Contexte global quiz
├── fetch/
│   └── api/
│       └── fetchfetchQuestions.js  # API calls
├── hooks/
│   ├── useColorScheme.ts
│   └── useThemeColor.ts
├── App.js                # Point d'entrée
├── app.json              # Configuration Expo
└── package.json
```

## 📡 API Documentation

### Base URL
```
http://localhost:5000
```

### Endpoints

#### 1. Récupérer toutes les photos

```http
GET /photos
```

**Réponse** :
```json
[
  {
    "_id": "67890abcdef123456",
    "url": "http://localhost:5000/upload/photoexam/1.jpg"
  }
]
```

#### 2. Récupérer les questions d'une photo

```http
GET /questions/:photoId
```

**Paramètres** :
- `photoId` (string) : ID MongoDB de la photo

**Réponse** :
```json
{
  "_id": "67890xyz",
  "photo_id": "67890abcdef123456",
  "options_ids": ["A", "B", "C", "D"],
  "correct_option_ids": ["B", "C"]
}
```

#### 3. Test de connexion MongoDB

```http
GET /test-db
```

**Réponse** :
```
Connexion à MongoDB réussie
```

#### 4. Accès aux images

```http
GET /upload/photoexam/:filename
```

Exemple : `http://localhost:5000/upload/photoexam/1.jpg`

## 🗄️ Schémas de données

### Photo Schema

```javascript
{
  url: String (required)
}
```

### Question Schema

```javascript
{
  photo_id: ObjectId (required, ref: 'Photo'),
  options_ids: [String],
  correct_option_ids: [String]
}
```

## 🧪 Tests

### Backend

```bash
cd backendMPermis
npm test
```

### Frontend

```bash
cd MonPermisFrontend
npm test
```

## 📱 Déploiement

### Backend (Exemple avec Heroku)

```bash
heroku create monpermis-api
git subtree push --prefix backendMPermis heroku main
heroku config:set MONGO_URI=your_mongodb_atlas_uri
```

### Frontend (Expo EAS)

```bash
npm install -g eas-cli
eas login
eas build --platform android
eas build --platform ios
```

## 🤝 Contribution

Les contributions sont les bienvenues ! Voici comment contribuer :

1. Fork le projet
2. Créez votre branche (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📝 Bonnes pratiques

- Suivez les conventions de code ESLint
- Documentez les nouvelles fonctionnalités
- Testez sur iOS et Android
- Utilisez des messages de commit clairs
- Mettez à jour le README si nécessaire

## 🐛 Problèmes connus

- [ ] Vérifier la compatibilité avec les anciennes versions d'Android
- [ ] Optimiser le chargement des images
- [ ] Ajouter des tests unitaires

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👥 Auteurs

- **Votre Nom** - *Développeur principal* - [GitHub](https://github.com/votre-username)

## 🙏 Remerciements

- Expo pour la plateforme de développement
- React Native community
- MongoDB Atlas
- Tous les contributeurs

## 📞 Contact

Pour toute question ou suggestion :

- 📧 Email : bako.isaie@gmail.com
- 💼 LinkedIn : [Votre profil](https://linkedin.com/in/votre-profil)


