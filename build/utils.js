
function serve(Webpack, WebpackDevServer, webpackConfig) {
  const compiler = Webpack(webpackConfig);
  const server = new WebpackDevServer(compiler, webpackConfig.devServer);

  // require(`../mock/index`)

  server.listen(webpackConfig.devServer.port, '0.0.0.0', () => {
    console.log('Starting sever');
  });
}

function build(Webpack, webpackConfig) {
  Webpack(webpackConfig, (err, stats) => {
    if (err) throw err;
  });
}

module.exports = {
  serve,
  build,
};
