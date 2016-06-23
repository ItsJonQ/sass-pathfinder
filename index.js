// Sass Pathfinder

var pathfinder = function() {
  var paths = Array.prototype.slice.call(arguments);
  return [].concat.apply([], paths);
};

module.exports = pathfinder;
