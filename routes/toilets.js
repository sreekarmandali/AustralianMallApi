var express = require('express');
var router = express.Router();
var db = require('../Connection/connect.js');
var toiletController = require('../Controllers/toilet_controller');
var Users = require('../models/toilet_model');
//var bodyParser = require('body-parser');
//var urlencodedParser = bodyParser.urlencoded({ extended: false })  

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
/* GET users listing. */
router.get('/', toiletController.get);




module.exports = router;

