const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  salary: { type: String },
  location: { type: String },
  matchPercentage: { type: Number }, // e.g., 85%
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Job", jobSchema);
