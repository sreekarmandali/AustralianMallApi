var express = require('express');
var router = express.Router();
var db = require('../Connection/connect.js');
var ratingsController = require('../Controllers/ratings_controller');

//var bodyParser = require('body-parser');
//var urlencodedParser = bodyParser.urlencoded({ extended: false })  

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
/* GET users listing. */
router.get('/getReviews', ratingsController.get);

router.post('/addReview', ratingsController.add);




module.exports = router;

