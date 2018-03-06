const { resolve } = require('path');
const Webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const settings = require('./settings');

const vendorArr = [
  'react',
  'react-dom',
  'react-redux',
  'react-router-dom',
  'redux',
  'redux-thunk',
];

module.exports = (env = {}) => {
  let mode = 'development';
  const entry = {
    index: [
      'babel-polyfill',
      'whatwg-fetch',
      './src/index.js',
    ],
    vendor: vendorArr,
  };
  const output = {
    filename: 'scripts/[name].[hash].js',
    path: resolve(__dirname, 'dist'),
    publicPath: settings.publicPath,
  };
  const module = {
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
  };
  let plugins = [
    new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ];
  let optimization = {
    splitChunks: {
      chunks: 'all',
    },
  };

  if (env.dev) {
    mode = 'development';
    entry.index = [
      'react-hot-loader/patch',
      ...entry.index,
    ];

    plugins = [
      ...plugins,
      new Webpack.HotModuleReplacementPlugin(),
    ];
  } else if (env.prod) {
    module.rules = module.rules.reduce((rules, rule) => {
      if (Array.isArray(rule.use) && rule.use[0].match(/style/)) {
        rules.push({
          ...rule,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: rule.use.slice(1),
          }),
        });
      } else {
        rules.push(rule);
      }

      return rules;
    }, []);

    plugins = [
      ...plugins,
      new ExtractTextPlugin({
        filename: 'styles/[name].[hash].css',
      }),
      new ImageminPlugin(),
    ];
  }

  if (settings.isMock) {
    plugins.push(new Webpack.DefinePlugin({
      __MOCK__: true,
    }));
  }

  const webpackConfig = {
    mode,
    context: resolve(__dirname),
    entry,
    output,
    module,
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
    plugins,
    optimization,
    devServer: {
      hotOnly: true,
      contentBase: './dist',
      publicPath: settings.publicPath,
      port: 9080,
      host: '0.0.0.0',
      compress: true,
      historyApiFallback: {
        index: settings.publicPath,
      },
      proxy: {
        '/index.php': {
          target: 'http://aidocx.com',
        },
      },
    },
  };

  return webpackConfig;
};
