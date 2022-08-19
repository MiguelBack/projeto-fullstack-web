'use strict'

var express = require('express');
var UsuarioControle = (controle/usuario);

var api = express.Router();

api.get('home', UsuarioControle.home);
api.get('test', UsuarioControle.test);

module.exports = api;

