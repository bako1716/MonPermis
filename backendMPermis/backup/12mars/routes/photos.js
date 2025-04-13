const express = require('express');
const router = express.Router();
const Photo = require('../models/Photo'); // Modèle Mongoose pour les photos

// Route pour récupérer toutes les photos
router.get('/photos', async (req, res) => {
  try {
    const photos = await Photo.find(); // Recherche toutes les photos dans la base de données
    res.json(photos);  // Retourne les photos sous forme de JSON
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la récupération des photos' });
  }
});

module.exports = router;
