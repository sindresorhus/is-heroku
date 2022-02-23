/**
Check if your code is running on Heroku.

@example
```
import isHeroku from 'is-heroku';

// On your local computer
console.log(isHeroku);
//=> false

// On Heroku
console.log(isHeroku);
//=> true
```
*/
declare const isHeroku: boolean;

export default isHeroku;
