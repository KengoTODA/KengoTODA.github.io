var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var minifyHtml = require('gulp-minify-html');

gulp.task('default', ['minify-css', 'minify-html']);

gulp.task('minify-css', function () {
  return gulp.src(['css/normalize.min.css', 'css/main.css'])
    .pipe(concat('all.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('./css'));
});

gulp.task('minify-html', function () {
  return gulp.src('html/*.html')
    .pipe(minifyHtml())
    .pipe(gulp.dest('.'));
});
