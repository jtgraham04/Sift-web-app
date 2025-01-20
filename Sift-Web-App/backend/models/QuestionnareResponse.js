const mongoose = require('mongoose');

const questionnaireSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  q1: String,
  q2: String,
  q3: String,
  q4: String,
  q5: String,
}, { timestamps: true });

const QuestionnaireResponse = mongoose.model('QuestionnaireResponse', questionnaireSchema);

module.exports = QuestionnaireResponse;
