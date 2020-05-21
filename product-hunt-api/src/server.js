const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//iniciando o app
const app = express();

// iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true });

// importa todos os models
requireDir('./models');

// rotas
app.use('/api', require('./routes'));

app.listen(3000);