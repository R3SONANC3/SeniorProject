const express = require("express");
const cors = require("cors");
const { initMySQL } = require('./config');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

// Configure CORS options
const corsOptions = {
  origin: "http://3.106.191.243:8080", // Update with your React app's URL
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
};

// Use CORS middleware
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  console.log('Hello World');
  res.send('Hello World');
});

app.post('/post', (req, res) => {
  res.status(200).json({
    message: "Hello"
  });
});

app.get('/post', (req, res) => {
  res.status(200).json({
    message: "Hello"
  });
});

initMySQL().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
  });
}).catch(error => {
  console.error('Failed to initialize MySQL:', error);
});
