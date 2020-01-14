const SEQUELIZE = require('sequelize');
var con = require('../Connection/connect.js');
const RATINGS = con.define('ratings', {
    // attributes
    ratingsId: {
        type: SEQUELIZE.INTEGER,
        primaryKey: true

    },
    userName: {
        type: SEQUELIZE.STRING

    },
    rating: {
        type: SEQUELIZE.INTEGER

    },

    reviewComment: {
        type: SEQUELIZE.STRING

    }
});
module.exports = RATINGS;