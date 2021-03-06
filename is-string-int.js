/*!
 * is-string-int | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/is-string-int.js
*/
window.isStringInt = function isStringInt(str, option) {
  'use strict';

  option = option || {};

  if (arguments.length === 0) {
    throw new TypeError('No arguments. (One argument required)');
  }

  if (typeof str !== 'string') {
    throw new TypeError(
      String(str) +
      ' is not a string. Argument must be a string to be checked if it represents an integer.'
    );
  }

  var num = Number(str);

  var expected;
  if (option.parseLiteral) {
    if (str.trim() !== str) {
      return false;
    }

    expected = num.toString();
  } else {
    expected = str;
  }

  return expected !== 'NaN' && Math.round(num).toString() === expected;
};
