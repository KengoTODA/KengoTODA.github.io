var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('default', function () {
  return gulp.src(['css/normalize.min.css', 'css/main.css'])
    .pipe(concat('all.css'))
    .pipe(gulp.dest('./css'));
});
