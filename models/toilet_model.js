const SEQUELIZE = require('sequelize');
var con = require('../Connection/connect.js');
const TOILETS = con.define('Toilets', {
	// attributes
	tableId: {
		type: SEQUELIZE.INTEGER,
		primaryKey: true
	},
	distance: {
		type: SEQUELIZE.INTEGER

	}
    ,
	closingTime: {
		type: SEQUELIZE.TIME,

	},
	cleaningTime: {
		type: SEQUELIZE.TIME,

	}
});
module.exports = TOILETS;