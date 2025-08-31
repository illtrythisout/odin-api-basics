const path = require('node:path');
const express = require('express');
const send = require('send');

require('dotenv').config();

const app = express(); // initialize express in app

// Middleware to allow us to correctly parse the incoming request’s body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* ------------------------------------------------------------------------------------------------------------ */
// routes
app.get('/users', (req, res) => {
  return res.send('GET HTTP method on user resource');
});

app.post('/users', (req, res) => {
  return res.send('POST HTTP method on user resource');
});

app.put('/users/:userId', (req, res) => {
  return res.send(`PUT HTTP method on user/${req.params.userId} resource`);
});

app.delete('/users/:userId', (req, res) => {
  return res.send(`DELETE HTTP method on user/${req.params.userId} resource`);
});

/* ------------------------------------------------------------------------------------------------------------ */

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Express app - listening on port ${PORT}`);
});
