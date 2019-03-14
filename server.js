const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

// Iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o DB
mongoose.connect('mongodb+srv://admin:admin@cluster0-enedb.mongodb.net/test?retryWrites=true', { useNewUrlParser: true });

requireDir('./src/models');

app.use('/api', require('./src/routes'));

app.listen(3001);