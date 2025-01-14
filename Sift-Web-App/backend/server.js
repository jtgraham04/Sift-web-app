require("dotenv").config();
const express = require("express");
const mongoose = require("./config/db");
const cors = require("cors");

const authRoutes = require("./routes/Auth");
const userRoutes = require("./routes/user");
const jobRoutes = require("./routes/jobs");

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:5177", credentials: true }));


// Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/jobs", jobRoutes);

// Server startup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
