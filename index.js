import process from 'node:process';

const isHeroku = 'HEROKU' in process.env
	|| ('DYNO' in process.env && process.env.HOME === '/app');

export default isHeroku;
