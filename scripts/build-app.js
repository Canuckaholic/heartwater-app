function buildApp(cb) {
  const env = process.env.NODE_ENV || 'development';
  if (env === 'development') {
    console.log('Running in development mode')
  } else {
    console.log('Running in production mode')
  }
  cb();
}

module.exports = buildApp;
