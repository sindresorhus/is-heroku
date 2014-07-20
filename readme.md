# is-heroku [![Build Status](https://travis-ci.org/sindresorhus/is-heroku.svg?branch=master)](https://travis-ci.org/sindresorhus/is-heroku)

> Check if your code is running on Heroku


## Install

```sh
$ npm install --save is-heroku
```


## Usage

```js
var isHeroku = require('is-heroku');

// on your local computer
console.log(isHeroku);
//=> false

// on Heroku
console.log(isHeroku);
//=> true
```

Add an [environment variable](https://devcenter.heroku.com/articles/config-vars) first to improve the detection:

```sh
$ heroku config:set HEROKU=1
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
