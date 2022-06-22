'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Carregar Rotas

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors

// Rotas
app.get('/teste', (req, res) => {
    res.status(200).send({
        message: 'Testando servidor NodeJS'
    });
});

// Exportações
module.exports = app;