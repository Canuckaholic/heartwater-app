const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

function buildCoreJs() {
  return gulp.src('./src/js/*.js')
    .pipe(uglify())
    .pipe(concat('custom.js'))
    .pipe(gulp.dest('./www/assets/custom/js'))
}

module.exports = buildCoreJs;