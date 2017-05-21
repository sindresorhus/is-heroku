import test from 'ava';
import importFresh from 'import-fresh';

test('not heroku', t => {
	t.false(importFresh('.'));
});

test('heroku', t => {
	process.env.HEROKU = 1;
	t.true(importFresh('.'));
});
