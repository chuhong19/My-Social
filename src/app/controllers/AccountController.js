const Account = require('../models/Account');
const { mongooseToObject } = require('../../util/mongoose');
const jwt = require('jsonwebtoken');

class AccountController {

    register(req, res, next) {
        res.render('accounts/register');
    }

    confirmRegister(req, res, next) {
        var username = req.body.username;
        var password = req.body.password;
        var retypepassword = req.body.retypepassword;
        if (!username || !password || !retypepassword || password!== retypepassword) {
            res.json('Failed to register');
            return;
        }
        Account.findOne({ username: username })
        .then(data=>{
            if (!data) {
                const account = new Account(req.body);
                account.save()
                    .then(() => res.redirect('/home'))
                    .catch(next); 
            } else {
                res.json('Username already registered');
            }
        }).catch(err=>{
            res.json('Server error: ' + err);
        });
    }

    confirmLogin(req, res, next) {
        const username = req.body.username;
        const password = req.body.password;
        Account.findOne({username, password})
            .then(data => {
                    if (data) {
                        var token = jwt.sign({_id: data._id}, 'mk');
                        res.cookie('token', token);
                        res.redirect('/welcome');
                    }
                    else {
                        res.json('Wrong username or password');
                    }
                })
            .catch(err => res.json('Server error: ' + err));
    }
}

module.exports = new AccountController();