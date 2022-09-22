const express = require('express');
const router = express.Router();
const index = require('../controle/index');

router.get('/', index.init);

router.get('/testing', index.test);

module.exports = router;
