# is-string-int

[![NPM version](https://img.shields.io/npm/v/is-string-int.svg)](https://www.npmjs.com/package/is-string-int)
[![Bower version](https://img.shields.io/bower/v/is-string-int.svg)](https://github.com/shinnn/is-string-int.js/releases)
[![Build Status](https://travis-ci.org/shinnn/is-string-int.js.svg?branch=master)](https://travis-ci.org/shinnn/is-string-int.js)
[![Build status](https://ci.appveyor.com/api/projects/status/j4in0k0pwp20a0rj?svg=true)](https://ci.appveyor.com/project/ShinnosukeWatanabe/is-string-int-js)
[![Coverage Status](https://coveralls.io/repos/shinnn/is-string-int.js/badge.svg?branch=master&service=github)](https://coveralls.io/github/shinnn/is-string-int.js?branch=master)
[![devDependency Status](https://david-dm.org/shinnn/is-string-int.js/dev-status.svg)](https://david-dm.org/shinnn/is-string-int.js#info=devDependencies)

Check if a string represents an integer

```javascript
isStringInt('123'); //=> true
isStringInt('1.23'); //=> false
```

## Installation

### Package managers

#### [npm](https://www.npmjs.com/)

```
npm install is-string-int
```

#### [Bower](http://bower.io/)

```
bower install is-string-int
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

Returns `true` even if the string includes [octal/hexadecimal expressions](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Values,_variables,_and_literals#Integers) and [exponential notation](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Values,_variables,_and_literals#Floating-point_literals). (By default it returns `false` in that case.)

```javascript
isStringInt('01', {parseLiteral: true}); //=> true
isStringInt('0x1', {parseLiteral: true}); //=> true
isStringInt('0e+0', {parseLiteral: true}); //=> true
```

## License

Copyright (c) 2014 - 2015 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
