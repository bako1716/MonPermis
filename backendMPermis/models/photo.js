import mongoose from 'mongoose';

// Définition du schéma pour les photos
const photoSchema = new mongoose.Schema({
  url: { type: String, required: true } // L'URL de la photo
});

// Création du modèle Photo basé sur le schéma
const Photo = mongoose.model('Photo', photoSchema);

export default Photo;
