import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Photo from './models/photo.js'; // Vérifie que le modèle existe bien

dotenv.config();

const NEW_BASE_URL = 'http://localhost:5000/upload/photoexam/'; // Nouveau chemin corrigé

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  console.log('✅ Connecté à MongoDB');

  try {
    // Récupérer toutes les photos
    const photos = await Photo.find();

    for (let photo of photos) {
      // Extraire uniquement le nom de fichier depuis l'ancien chemin
      const filename = photo.url.split('/').pop(); // Extrait "1.jpg" de l'ancien chemin

      // Construire la nouvelle URL
      const newUrl = `${NEW_BASE_URL}${filename}`;

      // Mettre à jour la base de données
      await Photo.updateOne({ _id: photo._id }, { $set: { url: newUrl } });

      console.log(`🔄 Mis à jour : ${photo.url} → ${newUrl}`);
    }

    console.log('✅ Mise à jour terminée');
  } catch (error) {
    console.error('❌ Erreur lors de la mise à jour des URLs:', error);
  } finally {
    mongoose.disconnect();
  }
}).catch(err => console.error('❌ Erreur de connexion à MongoDB:', err));
