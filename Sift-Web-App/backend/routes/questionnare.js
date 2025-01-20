const express = require('express');
const QuestionnaireResponse = require('../models/QuestionnareResponse');
const authMiddleware = require('../middleware/middleware');

const router = express.Router();

// Save questionnaire responses
router.post('/', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id; // Retrieved from the token
    const response = new QuestionnaireResponse({
      user: userId,
      ...req.body,
    });

    await response.save();
    res.status(201).json({ message: 'Responses saved successfully' });
  } catch (err) {
    console.error('Error saving responses:', err);
    res.status(500).json({ message: 'Error saving responses', error: err.message });
  }
});

module.exports = router;
