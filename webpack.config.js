const { resolve } = require('path');
const Webpack = require('webpack');
const WebpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const HtmlWebpackPlugin = require('html-webpack-plugin');

const settings = require('./settings');

module.exports = (env, argv) => {
  const baseConfig = {
    context: resolve(__dirname),
    entry: {
      index: './src/index.js',
      vendor: [
        'react',
        'react-dom',
        'react-redux',
        'react-router-dom',
        'redux',
        'redux-storage',
        'redux-storage-decorator-debounce',
        'redux-storage-decorator-filter',
        'redux-storage-engine-localstorage',
        'redux-thunk',
      ],
    },
    output: {
      filename: 'scripts/[name].[hash].js',
      path: resolve(__dirname, 'dist'),
      publicPath: settings.publicPath,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.(jpg|png|gif|ico|svg)/,
          loader: 'url-loader',
          options: {
            limit: 1024,
            name: 'assets/[name].[ext]?[hash:7]',
          },
        },
      ],
    },
    resolve: {
      alias: {
        assets: resolve(__dirname, 'src/assets'),
        components: resolve(__dirname, 'src/components'),
        containers: resolve(__dirname, 'src/containers'),
        actions: resolve(__dirname, 'src/actions'),
        reducers: resolve(__dirname, 'src/reducers/'),
        styles: resolve(__dirname, 'src/styles'),
        sources: resolve(__dirname, 'src/sources'),
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      new Webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: 'vendor.js',
      }),
    ],
  };

  const devMergeConfig = {
    entry: {
      index: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:9080',
        'webpack/hot/only-dev-server',
        'whatwg-fetch',
        './src/index.js',
      ],
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            'style-loader',
            'css-loader?modules&localIdentName=[name]__[local]-[hash:base64:5]',
            'postcss-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
          ],
        },
      ],
    },
    plugins: [
      new Webpack.HotModuleReplacementPlugin(),
      new Webpack.NamedModulesPlugin(),
      new Webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('develop'),
      }),
    ],
    devServer: {
      hot: true,
      contentBase: './dist',
      publicPath: settings.publicPath,
      port: 9080,
      host: '0.0.0.0',
      compress: true,
      historyApiFallback: true,
      proxy: {
        '/api/templates': {
          target: 'http://localhost:9081',
          changeOrigin: true,
        },
        '/statics': {
          target: 'http://localhost:9081',
          changeOrigin: true,
        },
        '/apiword': {
          target: 'http://aidocx.com',
        },
      },
    },
  };

  const prodMergeConfig = {
    entry: {
      index: [
        'whatwg-fetch',
        './src/index.js',
      ],
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              'css-loader?modules&localIdentName=[name]__[local]-[hash:base64:5]',
              'postcss-loader',
              'sass-loader',
            ],
          }),
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              'css-loader',
            ],
          }),
        },
      ],
    },
    plugins: [
      new ExtractTextPlugin({
        filename: 'styles/[name].[hash].css',
      }),
      new Webpack.optimize.UglifyJsPlugin({
        sourceMap: 'cheap-module-source-map',
        beautify: false,
        mangle: {
          screw_ie8: true,
        },
        compress: {
          screw_ie8: true,
        },
        comments: false,
      }),
      new Webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      new ImageminPlugin(),
    ],
  };


  if (env.dev) {
    return WebpackMerge(baseConfig, devMergeConfig);
  } else if (env.prod) {
    return WebpackMerge(baseConfig, prodMergeConfig);
  }

  return baseConfig;
};
