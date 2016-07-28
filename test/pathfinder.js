// Test :: Pathfinder

var assert = require('chai').assert;
var pathfinder = require('../index');

describe('pathfinder', function() {
  it('should export an array of paths', function() {
    var paths = ['a', 'b', 'c'];

    assert.isArray(pathfinder(paths));
  });

  it('should contain strings in array of paths', function() {
    var paths = ['a', 'b', 'c'];

    assert.isString(pathfinder(paths)[0]);
  });

  it('should consolidate a mixture of strings and arrays', function() {
    var paths = ['a', 'b', ['c']];

    assert.equal(3, pathfinder(paths).length);
  });

  it('should flatten deep arrays', function() {
    var paths = ['a', [['b'], [[['c']]]]];

    assert.equal(3, pathfinder(paths).length);
  });

  it('should filter out duplicate paths', function() {
    var paths = ['a', [['b'], [[['c']]]], 'c'];

    assert.equal(3, pathfinder(paths).length);
  });
});
