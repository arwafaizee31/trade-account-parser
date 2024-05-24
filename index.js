const express = require('express');

require('dotenv').config();
require('./database');  // Ensure this file connects to MongoDB



const app = express();


app.use(express.json());


// Start server
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
  res.send('<h2>This is from index.js file</h2>');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
