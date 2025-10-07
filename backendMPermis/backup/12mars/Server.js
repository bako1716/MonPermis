import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('✅ MongoDB connecté'))
.catch(err => console.error('❌ Erreur de connexion MongoDB:', err))

// Définition du modèle Quiz
const quizSchema = new mongoose.Schema({
  question: String,
  image_url: String,
  answer: String,
})

const Quiz = mongoose.model('Quiz', quizSchema)

// Routes API
app.get('/quizzes', async (req, res) => {
  const quizzes = await Quiz.find()
  res.json(quizzes)
})

app.post('/quizzes', async (req, res) => {
  const { question, image_url, answer } = req.body
  const newQuiz = new Quiz({ question, image_url, answer })
  await newQuiz.save()
  res.json(newQuiz)
})

// Lancer le serveur
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`))
