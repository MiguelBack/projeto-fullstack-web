'use strict';

const mongoose = require('mongoose');

const UsuarioEsquema = mongoose.Schema({
	nome: String,
	sobrenome: String,
	apelido: String,
	email: String,
	senha: String,
	funcao: String,
	imagem: String,
});

module.exports = mongoose.model('Usuario', UsuarioEsquema);
