// index.js

const express = require('express');
const app = express();
const port = 3000; // You can use any available port here

// Middlewares
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

// 'Hello' Greeting Endpoint
app.post('/hello', (req, res) => {
  const { name } = req.body; // Extract the name from the request body
  if (!name) {
    return res.status(400).json({ error: 'Name is required' }); // Return an error if no name is provided
  }
  res.json({ message: `Hello, ${name}` }); // Return a 'Hello' greeting message
});

// 'Hi' Greeting Endpoint
app.post('/hi', (req, res) => {
  const { name } = req.body; // Extract the name from the request body
  if (!name) {
    return res.status(400).json({ error: 'Name is required' }); // Return an error if no name is provided
  }
  res.json({ message: `Hi, ${name}` }); // Return a 'Hi' greeting message
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
