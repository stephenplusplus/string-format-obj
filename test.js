'use strict';

var assert = require('assert');

var format = require('./index.js');

describe('format', function () {
  it('should replace denoated keys with corresponding values', function() {
    var formatted = format('{greeting} {thing}!', {
      greeting: 'Hello',
      thing: 'world'
    });

    assert.strictEqual(formatted, 'Hello world!');
  });

  it('should leave any unsatisfied keys unchanged', function() {
    var formatted = format('{greeting} {thing}!', {
      greeting: 'swamp'
    });

    assert.strictEqual(formatted, 'swamp {thing}!');
  });

  it('should inject falsy values', function() {
    var formatted = format('{num}', {
      num: 0
    });

    assert.strictEqual(formatted, '0');
  });

  it('should return a function if an object is not supplied', function() {
    var formatFunc = format('{greeting} do!');
    var formatted = formatFunc({ greeting: 'howdy' });

    assert.strictEqual(formatted, 'howdy do!');
  });
});
