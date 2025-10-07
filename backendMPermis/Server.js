import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import photoRoutes from './routes/photos.js';
import questionRoutes from './routes/questions.js';

dotenv.config();
console.log("📌 MONGO_URI:", process.env.MONGO_URI);
console.log("📌 PORT:", process.env.PORT);

const app = express();
app.use(express.json());
app.use(cors());
app.use('/upload', express.static('upload'));

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('✅ MongoDB connecté'))
  .catch(err => console.error('❌ Erreur de connexion MongoDB:', err));

// Route pour tester la connexion MongoDB
app.get('/test-db', async (req, res) => {
  try {
    const result = await mongoose.connection.db.admin().ping();
    res.send('Connexion à MongoDB réussie');
  } catch (err) {
    res.status(500).send('Erreur de connexion à MongoDB');
  }
});

// Utilisation des routes pour les photos et les questions
app.use(photoRoutes);  
app.use(questionRoutes);

// Lancer le serveur
const PORT = process.env.PORT || 5000;
console.log("📌 Routes disponibles :", app._router.stack
  .filter(r => r.route)
  .map(r => r.route.path)
);

app.listen(PORT, () => console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`));
