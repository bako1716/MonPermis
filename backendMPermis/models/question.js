import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
  photo_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Photo' },
  options_ids: [{ type: String }], // ID des options
  correct_option_ids: [{ type: String }], // ID des réponses correctes
});

const Question = mongoose.model('Question', questionSchema);

export default Question;
