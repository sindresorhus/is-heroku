# is-heroku

> Check if your code is running on Heroku

## Install

```sh
npm install is-heroku
```

## Usage

```js
import isHeroku from 'is-heroku';

// On your local computer
console.log(isHeroku);
//=> false

// On Heroku
console.log(isHeroku);
//=> true
```

Add an [environment variable](https://devcenter.heroku.com/articles/config-vars) first to improve the detection:

```sh
heroku config:set HEROKU=1
```
