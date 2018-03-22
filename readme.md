# is-heroku [![Build Status](https://travis-ci.org/sindresorhus/is-heroku.svg?branch=master)](https://travis-ci.org/sindresorhus/is-heroku)

> Check if your code is running on Heroku


## Install

```
$ npm install is-heroku
```


## Usage

```js
const isHeroku = require('is-heroku');

// On your local computer
console.log(isHeroku);
//=> false

// On Heroku
console.log(isHeroku);
//=> true
```

Add an [environment variable](https://devcenter.heroku.com/articles/config-vars) first to improve the detection:

```
$ heroku config:set HEROKU=1
```


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
