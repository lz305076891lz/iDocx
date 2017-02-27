const {resolve} = require('path');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './src/index.js'
    ]
  },
  output: {
    filename: 'js/[name].js',
    path: resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?modules&localIdentName=[name]__[local]-[hash:base64:5]',
          'postcss-loader'
        ]
      },
      {
        test: /\.(jpg|png|gif|ico|svg)/,
        use: 'url-loader'
      }
    ]
  },
  context: resolve(__dirname, '../'),
  devServer: {
    hot: true,
    contentBase: './dist',
    publicPath: '/',
    port: 8080
  },
  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
