const Post = require('../models/Post');
const { mongooseToObject, mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {

    index (req, res, next) {
        res.render('home');      
    }

    welcome (req, res, next) {
        Post.find({})
            .then(posts => {
                res.render('welcome', {
                    posts: mutipleMongooseToObject(posts)
                });
            })
    }
}

module.exports = new SiteController();