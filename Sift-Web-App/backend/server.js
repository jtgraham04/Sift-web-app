require('dotenv').config({ });
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Import your auth routes



const app = express();
const PORT = process.env.PORT || 5002;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Use auth routes under /api/auth
const authRoutes = require('../backend/routes/Auth');
app.use("/api/auth", authRoutes);
const questionnaireRoutes = require('../backend/routes/questionnare');

// Use the questionnaire API
app.use('/api/questionnaire', questionnaireRoutes);



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
