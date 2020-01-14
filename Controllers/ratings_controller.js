const ratingsService = require('../services/ratings_service');
const { to, ReE, ReS } = require('../services/util_service');

const add = async function (req, res) {
    const BODY = req.body;

    if ( !BODY.userName && !BODY.ratings && !BODY.reviewComments) {
        return ReE(res, 'Please enter an name or location or bill or itemcount.');
    } else {
        let err, ratings;

        [err, ratings] = await to(ratingsService.addReview(BODY));

        if (err) return ReE(res, err, 422);
        return ReS(res, { message: 'Successfully added the review.', user: ratings }, 201);
    }
}
module.exports.add = add;

const get = async function (req, res) {
    let reviews, err;
    [err, reviews] = await to(ratingsService.getReviews());
    if (err) return ReE(res, err.message);
    res.send(reviews);
}
module.exports.get = get;