
const gulp = require('gulp');
const babel = require('gulp-babel');
const fs = require('fs');

gulp.task('transpile-module', () => {
  return gulp.src(['./src/**/*.js'])
    .pipe(babel())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('babel-module', () => {
  return gulp.watch(['./src/**/*.js'], ['transpile-module']);
});

gulp.task('default', [
  'transpile-module',
  'babel-module'
]);