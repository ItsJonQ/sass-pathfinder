// Sass Pathfinder

var uniq = require('lodash.uniq');
var flattenDeep = require('lodash.flattendeep');

var pathfinder = function() {
  var paths = Array.prototype.slice.call(arguments);
  paths = [].concat.apply([], paths);

  return uniq(flattenDeep(paths));
};

module.exports = pathfinder;
