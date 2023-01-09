const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const accountController = require('../app/controllers/AccountController');

router.get('/register', accountController.register);
router.post('/register', accountController.confirmRegister);
router.post('/login', accountController.confirmLogin);
router.get('/create', accountController.create);
router.post('/store', accountController.store);

module.exports = router;