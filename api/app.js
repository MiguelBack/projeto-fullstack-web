'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Carregar Rotas
var usuario_rotas = require(/rota/usuario);
// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors

// Rotas
app.use(api, usuario_rotas);
// Exportações
module.exports = app;