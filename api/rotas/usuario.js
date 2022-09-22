'use strict';

const express = require('express');
const usuario = require('../controle/usuario');
const router = express.Router();

router.get('/usuario', usuario.inicio);
router.get('/usuario/teste', usuario.teste);

module.exports = router;
