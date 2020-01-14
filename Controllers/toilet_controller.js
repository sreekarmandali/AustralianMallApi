const toiletService = require('../services/toilet_service');
const { to, ReE, ReS } = require('../services/util_service');


const get = async function (req, res) {
    let toilet, err;
    [err, toilet] = await to(toiletService.getToilets());
    if (err) return ReE(res, err.message);
    res.send(toilet);
}
module.exports.get = get;



