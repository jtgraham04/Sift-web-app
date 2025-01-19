// routes/auth.js
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// ======== REGISTER ========
// Expects: { username, email, password }
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Basic validation
    if (!password || (!email && !username)) {
      return res.status(400).json({
        error: "Please provide a username/email and a password.",
      });
    }

    // Check if user exists by email OR username
    let existingUser = null;
    if (email) {
      existingUser = await User.findOne({ email });
    }
    if (!existingUser && username) {
      existingUser = await User.findOne({ username });
    }

    if (existingUser) {
      return res.status(400).json({
        error: "A user with that email or username already exists.",
      });
    }

    // Create a new user (password is hashed by userSchema.pre("save"))
    const newUser = new User({ username, email, password });
    await newUser.save();

    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Register error:", error);
    return res
      .status(500)
      .json({ error: "Server error during registration." });
  }
});

// ======== LOGIN ========
// Expects: { username, email, password }
router.post("/login", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check for required fields
    if ((!username && !email) || !password) {
      return res.status(400).json({
        error: "Please provide a username/email and a password.",
      });
    }

    // Find user by email or username
    let user = null;
    if (email) {
      user = await User.findOne({ email });
    }
    if (!user && username) {
      user = await User.findOne({ username });
    }

    // If no user found
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Compare the provided password with the hashed password in DB
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Username and password is incorrect" });
    }

    // Generate JWT for successful login
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET || "SOME_DEFAULT_SECRET",
      { expiresIn: "1h" }
    );

    // Return one final success response
    return res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ error: "Server error during login." });
  }
});

module.exports = router;
