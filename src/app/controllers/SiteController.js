
class SiteController {

    index (req, res, next) {
        res.render('home');      
    }

    welcome (req, res, next) {
        res.render('welcome');
    }
}

module.exports = new SiteController();