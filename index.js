'use strict';
var isNpm = require('is-npm');

module.exports = 'HEROKU' in process.env ||
	(!isNpm && 'DYNO' in process.env && process.env.HOME === '/app');
