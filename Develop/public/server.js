const express = require('express');
const app = express();
const PORT = process.env.port || 3001;

app.use(express.static('public'));
