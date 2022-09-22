'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Importando rotas
const rotasIndex = require('./rotas/index');
const rotasUsuario = require('./rotas/usuario');

// Carregar rotas
app.use(rotasIndex);
app.use(rotasUsuario);

// Exportações
module.exports = app;
