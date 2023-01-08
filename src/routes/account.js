const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const accountController = require('../app/controllers/AccountController');

router.post('/login', accountController.confirmLogin);


module.exports = router;