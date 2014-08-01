'use strict';
module.exports = 'HEROKU' in process.env || ('DYNO' in process.env && process.env.HOME === '/app');
