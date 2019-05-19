const gulp = require('gulp');
const minifyCSS = require('gulp-minify-css');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const livereload = require('gulp-livereload')

const AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

function buildCoreStyles() {
  return gulp.src('./src/scss/*.scss')
    .pipe(sass({
      outputStyle: 'nested',
      precision: 10,
      onError: console.error.bind(console, 'Sass error:')
    }))
    .pipe(autoprefixer({ browsers: AUTOPREFIXER_BROWSERS }))
    .pipe(minifyCSS())
    .pipe(concat('custom.css'))
    .pipe(gulp.dest('./www/assets/custom/css'))
    .pipe(livereload())
}

module.exports = buildCoreStyles;