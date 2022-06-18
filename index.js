const http = require('http');
const fs = require('fs');

const express = require('express');
const path = require('path');
const app = express();

const hostname = 'localhost';
const port = 8080;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '/about.html'));
});

app.get('/contact-me', (req, res) => {
  res.sendFile(path.join(__dirname, '/contact-me.html'));
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/404.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
