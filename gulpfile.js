var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');

gulp.task('default', function () {
  return gulp.src(['css/normalize.min.css', 'css/main.css'])
    .pipe(concat('all.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('./css'));
});
