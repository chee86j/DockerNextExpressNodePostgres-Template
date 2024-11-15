require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

// Sample route
app.get('/', (req, res) => {
  res.send('Express server is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
