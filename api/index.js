'use strict'

var mongoose = require('mongoose');
var app = require('./app');

// Conexão com o banco de dados
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/teste') //{ useMongoClient: true })
    .then(() => {
        console.log("++ Conexão realizada com sucesso!")
    })
    .catch(err => console.log(err));