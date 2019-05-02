'use strict';

const config = require('config');
const webpack = require('webpack');
const Visualizer = require('webpack-visualizer-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  entry: [
    './src/js/app.jsx',
    'webpack-dev-server/client?http://0.0.0.0:8090', // WebpackDevServer host and port
    'webpack/hot/only-dev-server'
  ],
  output: {
    path: `${path.resolve(__dirname)}/dist`,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        include: /(src[\/\\]js)/,
        loader: 'babel-loader'
      },
      {
        test: /\.jsx?$/,
        include: /(src[\/\\]js)/,
        loader: 'babel-loader'
      },
      {
        test: /\.json?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'json-loader'
      },
      {
        test: /\.css?$/,
        loaders: ['style-loader', 'raw-loader']
      },
      {
        test: /\.scss?$/,
        loaders: ['style-loader', 'raw-loader', 'sass-loader', 'import-glob']
      },
      {
        test: /\.(png|ico|gif)?$/,
        loader: 'file-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8090,
    proxy: {
      '/appServer/*': 'http://localhost:9000',
      '/gstServer/*': 'http://localhost:3000',
      '/api/*': 'http://localhost:3000'
    }
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './assets', to: './assets' }
    ]),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: path.join(__dirname, './src/index.html')
    }),
    new webpack.IgnorePlugin(/^(buffertools)$/),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      ENV: JSON.stringify(config.webpack),
      appConfig: JSON.stringify(config.clientConfig)
    }),
    new Visualizer({ filename: '../reports/bundle-statistics.html' }),
    new webpack.LoaderOptionsPlugin({ debug: process.env === 'production' })
  ],
  devtool: 'source-map'
};
