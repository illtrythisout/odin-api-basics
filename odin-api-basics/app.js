const path = require('node:path');
const express = require('express');
const send = require('send');

require('dotenv').config();

const app = express(); // initialize express in app

// Middleware to allow us to correctly parse the incoming request’s body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.get('/', (req, res) => {
  res.send('Received a GET HTTP method');
});
app.post('/', (req, res) => {
  return res.send('Received a POST HTTP method');
});
app.put('/', (req, res) => {
  return res.send('Received a PUT HTTP method');
});
app.delete('/', (req, res) => {
  return res.send('Received a DELETE HTTP method');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Express app - listening on port ${PORT}`);
});
