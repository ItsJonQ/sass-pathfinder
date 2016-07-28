// Sass Pathfinder

var _ = require('lodash');

var pathfinder = function() {
  var paths = Array.prototype.slice.call(arguments);
  paths = [].concat.apply([], paths);

  return _.uniq(_.flattenDeep(paths));
};

module.exports = pathfinder;
