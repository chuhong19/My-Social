const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const accountController = require('../app/controllers/AccountController');

router.get('/register', accountController.register);
router.post('/register', accountController.confirmRegister);
router.post('/login', accountController.confirmLogin);


module.exports = router;