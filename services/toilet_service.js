var con = require('../Connection/connect.js');


var Toilets = require('../models/toilet_model');

const { to, ReE, ReS } = require('../services/util_service');

const getToilets = async () => {
    let err, toilets;
    [err, toilets] = await to(Toilets.findAll({
        attributes: ['tableId', 'Distance', 'closingTime', 'cleaningTime']
    }));
    if (err) TE('Toilets not able to fetch');
    return toilets;
}
module.exports.getToilets = getToilets;
