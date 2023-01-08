const Account = require('../models/Account');

class AccountController {

    confirmLogin(req, res, next) {
         res.json('login');
    }
}

module.exports = new AccountController;