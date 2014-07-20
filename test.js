'use strict';
var test = require('ava');
var requireUncached = require('require-uncached');

test('not heroku', function (t) {
	t.assert(!requireUncached('./'));
});

test('heroku', function (t) {
	process.env.HEROKU = 1;
	t.assert(requireUncached('./'));
});
