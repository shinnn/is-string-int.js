# is-string-int

[![Build Status](https://travis-ci.org/shinnn/is-string-int.js.svg?branch=master)](https://travis-ci.org/shinnn/is-string-int.js)
[![Build status](https://ci.appveyor.com/api/projects/status/j4in0k0pwp20a0rj?svg=true)](https://ci.appveyor.com/project/ShinnosukeWatanabe/is-string-int-js)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/is-string-int.js.svg)](https://coveralls.io/r/shinnn/is-string-int.js)
[![devDependency Status](https://david-dm.org/shinnn/is-string-int.js/dev-status.svg)](https://david-dm.org/shinnn/is-string-int.js#info=devDependencies)

Check if a string represents an integer

```javascript
isStringInt('123'); //=> true
isStringInt('1.23'); //=> false
```

## Installation

### Package managers

#### [npm](https://www.npmjs.org/) [![NPM version](https://badge.fury.io/js/is-string-int.svg)](https://www.npmjs.org/package/is-string-int)

```sh
npm install is-string-int
```

#### [Bower](http://bower.io/) [![Bower version](https://badge.fury.io/bo/is-string-int.svg)](https://github.com/shinnn/is-string-int.js/releases)

```sh
bower install is-string-int
```

#### [Duo](http://duojs.org/)

```javascript
var isStringInt = require('shinnn/is-string-int.js');
```

### Standalone

[Download the script file directly.](https://raw.githubusercontent.com/shinnn/is-string-int.js/master/is-string-int.js)

## API

### isStringInt(*string*, *option*)

*string*: `String`  
*option*: `Object`  
Return: `Boolean`

See [the test](./test.js) for more detailed specifications.

```javascript
isStringInt('1'); //=> true
isStringInt('0'); //=> true
isStringInt('-1'); //=> true

isStringInt('0.1'); //=> false
isStringInt('foo'); //=> false
isStringInt(' 1'); //=> false
isStringInt('01'); //=> false
isStringInt('0x1'); //=> false
isStringInt('0e+0'); //=> false
isStringInt('NaN'); //=> false
```

#### option.parseLiteral

Type: `Boolean`  
Default: `false`

Returns `true` even if the string includes [octal/hexadecimal expressions](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Values,_variables,_and_literals#Integers) and [exponential notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Values,_variables,_and_literals#Floating-point_literals). (By default it returns `false` in that case.)

```javascript
isStringInt('01'); //=> true
isStringInt('0x1'); //=> true
isStringInt('0e+0'); //=> true
```

## License

Copyright (c) 2014 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
