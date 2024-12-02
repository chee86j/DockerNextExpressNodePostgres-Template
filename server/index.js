require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const todoRoutes = require('./routes/todoRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Synchronization
(async () => {
  try {
    await sequelize.authenticate(); // Check the database connection
    console.log('Database connection established successfully!');
    await sequelize.sync(); // Sync models with database
    console.log('Database synchronized successfully!');
  } catch (error) {
    console.error('Failed to connect to or synchronize the database:', error);
  }
})();

// Routes
app.use('/users', userRoutes);
app.use('/todos', todoRoutes); // Updated to avoid conflict

app.get('/', (req, res) => {
  res.send('Welcome to the Sequelize-PostgreSQL API!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
