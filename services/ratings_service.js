var con = require('../Connection/connect.js');


var Ratings = require('../models/rating_model');

const { to, ReE, ReS } = require('../services/util_service');

const addReview = async (rateInfo) => {
    let err, review;
   
    console.log(rateInfo);
    [err, review] = await to(Ratings.create(rateInfo));
    if (err) TE('review not added');
    return review;
}
module.exports.addReview = addReview;

const getReviews = async () => {
    let err, reviews;
    [err, reviews] = await to(Ratings.findAll(
        
    ));
    if (err) TE('reviews not able to fetch');
    return reviews;
}
module.exports.getReviews = getReviews;