const express = require('express');
const app = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

// Create a new user
app.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hashedPassword });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = app;