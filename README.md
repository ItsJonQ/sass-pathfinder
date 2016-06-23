# sass-pathfinder [![npm version](https://badge.fury.io/js/sass-pathfinder.svg)](https://badge.fury.io/js/sass-pathfinder)
A tiny includePath resolver for [node-sass](https://github.com/sass/node-sass)


## Install
```
npm install sass-pathfinder --save-dev
```

## Basic Usage
Pathfinder needs to be imported into your sass pipeline. Below is an example using Gulp:

```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pathfinder = require('sass-pathfinder');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pathfinder(
        './source-a', 
        ['../source-b', 'source-c/source-c1']
      )
    }))
    .pipe(gulp.dest('./css'));
});
```

## Options
### pathfinder(arguments)
Type: `String`, `Array` | Default: `[]`

Pass along strings or arrays as arguments to pathfinder.
