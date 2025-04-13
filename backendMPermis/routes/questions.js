import express from 'express';
import Question from '../models/Question.js';

const router = express.Router();

// Récupérer les options pour une photo donnée
router.get('/questions/:photoId', async (req, res) => {
  const { photoId } = req.params;
  try {
    const question = await Question.findOne({ photo_id: photoId });
    if (!question) {
      return res.status(404).json({ message: 'Question non trouvée pour cette photo' });
    }
    res.json(question);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la récupération des questions', error: err });
  }
});

export default router;
