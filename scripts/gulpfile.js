/* eslint no-console: ["error", { allow: ["log"] }] */
const gulp = require('gulp');
const connect = require('gulp-connect');
const open = require('open');

const runApp = require('./build-app.js');
const buildCoreJs = require('./build-core-js.js');
const buildCoreStyles = require('./build-core-styles.js');

const env = process.env.NODE_ENV || 'development';

// Tasks
gulp.task('run-app', runApp);

gulp.task('core-js', buildCoreJs);
gulp.task('core-styles', buildCoreStyles);

gulp.task('build-app', gulp.series([
  'core-js',
  'core-styles',
]));

// Watchers
const watch = {
  all() {
    console.log('Watching all')
    gulp.watch(['./src/js/*.js'], gulp.series(
      'core-js'
    ));
    gulp.watch('./src/scss/*.scss', gulp.series(
      'core-styles'
    ));
  }
};

// Server
function server() {
  connect.server({
    root: ['./'],
    livereload: false,
    port: '3000',
  });
}

gulp.task('server', () => {
  if (env === 'development') watch.all();
  server();
  open('http://localhost:3000/www/');
});

gulp.task('watch', () => {
  watch.all();
});
