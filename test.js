import process from 'node:process';
import test from 'ava';
import importFresh from 'import-fresh';

test('not heroku', t => {
	t.false(importFresh('./index.js'));
});

test('heroku', t => {
	process.env.HEROKU = 1;
	t.true(importFresh('./index.js'));
});
