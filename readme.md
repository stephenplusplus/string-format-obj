# string-format-obj
> Replace tokens from a string with values of an object.

```sh
$ npm install --save string-format-obj
```
```js
var format = require('string-format-obj');

format('{greeting} {thing}!', {
  greeting: 'Hello',
  thing: 'world'
});
// Hello world!
```
