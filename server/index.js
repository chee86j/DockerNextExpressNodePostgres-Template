require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;
const sequelize = require('./config/db');
const todoRoutes = require('./routes/todoRoutes');
const userRoutes = require('./routes/userRoutes');

app.use(cors());
app.use(express.json());

// Synchronize database
(async () => {
  try {
    await sequelize.sync(); // Sync models with database
    console.log('Database synchronized successfully!');
  } catch (error) {
    console.error('Failed to synchronize database:', error);
  }
})();

// Use routes
app.use('/users', userRoutes);
app.use('/users', todoRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Sequelize-PostgreSQL API!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});