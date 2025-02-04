const express = require("express");
const cors = require("cors");
const { initMySQL } = require('./config,js');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

// Configure CORS options
const corsOptions = {
  origin: process.env.CORS_ORIGIN || "http://localhost:3000", // Update with your React app's URL
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
};

// Use CORS middleware
app.use(cors(corsOptions));

// Middleware to set headers
app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
  next();
});

// Middleware to parse JSON requests
app.use(express.json());

app.get('/', (req, res) => {
  console.log('Hello World');
  res.send('Hello World');
});

app.post('/post', (req, res) => {
  // Handle POST request logic here
  res.status(200).json({
    message: "Hello"
  });
});

app.get('/post', (req, res) => {
  // Handle GET request logic here
  res.status(200).json({
    message: "Hello"
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.get('/data', async (req, res) => {
  try {
    const [rows] = await req.app.locals.db.execute('SELECT * FROM competencyDatabase.new_table');
    res.status(200).json(rows);
  } catch (error) {
    console.error("Database query error:", error);
    res.status(500).send('Error fetching data');
  }
});


// Initialize MySQL connection and start the server
initMySQL().then(connection => {
  // Save the connection to the app locals for future use
  app.locals.db = connection;

  app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
  });
}).catch(error => {
  console.error('Failed to initialize MySQL:', error);
});
