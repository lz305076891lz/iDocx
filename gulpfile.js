const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const Gulp = require('gulp');
const GulpClean = require('gulp-clean');

const webpackConfig = require('./build/webpack.base.config');

const utils = require('./build/utils');

Gulp.task('clean', () =>
  Gulp.src('./dist/**/*', {read: false})
    .pipe(GulpClean())
);

Gulp.task('copy', ['clean'], () =>
  Gulp.src('./src/img/**/*')
    .pipe(Gulp.dest('./dist/img'))
);

Gulp.task('build', ['copy'], function () {
  utils.build(Webpack, webpackConfig);
});

Gulp.task('serve', ['copy'], function () {
  utils.serve(Webpack, WebpackDevServer, webpackConfig);
});