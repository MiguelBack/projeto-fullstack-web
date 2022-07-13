'use strict'

const { default: mongoose } = require("mongoose")

var mongoose = require('mongoose');
var Esquema = mongoose.Esquema;

var UsuarioEsquema = Esquema({
    nome: String,
    sobrenome: String,
    apelido: String,
    email: String,
    senha: String,
    funcao: String,
    imagem: String
});

module.exports = mongoose.modelo('Usuario', UsuarioEsquema);