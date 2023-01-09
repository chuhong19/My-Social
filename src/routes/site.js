const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');
const authMiddleware = require('../app/middlewares/auth');


router.use('/welcome', authMiddleware.requireAuth, siteController.welcome);
router.use('/', siteController.index);


module.exports = router;