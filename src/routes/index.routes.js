const express = require('express');

const indexController = require('../controllers/index.controllers')
const router = express.Router();

router.get('/login', indexController.login);

module.exports = router