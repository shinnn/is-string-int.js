'use strict';

const test = require('tape');

function runTest(description, main) {
  test(description, t => {
    t.plan(14);

    t.equal(main.name, 'isStringInt', 'should have a function name.');

    t.strictEqual(
      main('1'),
      true,
      'should return true when the string represents positive integer.'
    );

    t.strictEqual(
      main('-25'),
      true,
      'should return true when the string represents negative integer.'
    );

    t.strictEqual(
      main('0'),
      true,
      'should return true when the string represents zero.'
    );

    t.strictEqual(
      main('NaN'),
      false,
      'should return false when the string represents NaN.'
    );

    t.strictEqual(
      main('1e+0'),
      false,
      'should return false when the string includes exponential notation.'
    );

    t.strictEqual(
      main('012'),
      false,
      'should return false when the string includes octal expression.'
    );

    t.strictEqual(
      main('0xA'), false,
      'should return false when the string includes hexadecimal expression.'
    );

    t.strictEqual(
      main('Number(1)'),
      false,
      'should return false when the string represents a statement.'
    );

    t.strictEqual(
      main('1 '),
      false,
      'should return false when the string includes whitespaces.'
    );

    t.strictEqual(
      main('A'),
      false,
      'should return false when the string includes non-number character.'
    );

    t.strictEqual(
      main('-'),
      false,
      'should return false when the string doesn\'t include any numbers.'
    );

    t.throws(
      () => main(),
      /TypeError.*No arguments/,
      'should throw a type error when it takes a non-string argument.'
    );

    t.throws(
      () => main(1),
      /TypeError.*1 is not a string/,
      'should throw a type error when it takes no arguments.'
    );
  });

  test(description + ' with `parseLiteral` option enabled', function(t) {
    t.plan(5);

    t.strictEqual(
      main(Number.MAX_VALUE.toExponential(), {parseLiteral: true}),
      true,
      'should return true even if the string includes exponential notation.'
    );

    t.strictEqual(
      main('00000000000000000000000000000000000000000001', {parseLiteral: true}),
      true,
      'should return true even if the string includes octal expression.'
    );

    t.strictEqual(
      main('0xF', {parseLiteral: true}),
      true,
      'should return true even if the string includes hexadecimal expression.'
    );

    t.strictEqual(
      main('Number(-1)', {parseLiteral: true}),
      false,
      'should return true when the string represents a statement.'
    );

    t.strictEqual(
      main('2 ', {parseLiteral: true}),
      false,
      'should return true when the string represents a statement.'
    );
  });
}

runTest('require(\'is-string-int\')', require('./'));

global.window = {};
require('./' + require('./bower.json').main);

runTest('window.isStringInt', window.isStringInt);
