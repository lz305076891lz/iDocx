const {resolve} = require('path');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: resolve(__dirname, '../'),
  entry: {
    index: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './src/index.js'
    ],
    vendor: [
      'react',
      'redux',
      'react-router',
      'react-redux'
    ]
  },
  output: {
    filename: 'scripts/[name].[hash].js',
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
        test: /\.pcss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?modules&localIdentName=[name]__[local]-[hash:base64:5]',
            'postcss-loader'
          ]
        })
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'postcss-loader'
            ]
        })
      },
      {
        test: /\.(jpg|png|gif|ico|svg)/,
        loader: 'url-loader',
        options: {
          limit: 1024,
          name: 'assets/[name].[ext]?[hash:7]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'assets': resolve(__dirname, '../src/assets'),
      'components': resolve(__dirname, '../src/components'),
      'containers': resolve(__dirname, '../src/containers'),
      'actions': resolve(__dirname, '../src/actions'),
      'reducers': resolve(__dirname, '../src/reducers/')
    }
  },
  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new Webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new ExtractTextPlugin({
      filename: 'styles/[name].[hash].css'
    })
  ],
  devServer: {
    hot: true,
    contentBase: './dist',
    publicPath: '/',
    port: 8080
  }
};
