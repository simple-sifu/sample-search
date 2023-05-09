const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

// eslint-disable-next-line import/no-extraneous-dependencies
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.common');

module.exports = merge(commonConfig, {
  // minifies builds by default !
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'builds/prod'),
    filename: 'js/[name].js',
    assetModuleFilename: 'img/[name][ext]',
  },
  plugins: [
    // modifies index.html and keeps it current
    new HtmlWebpackPlugin({
      title: 'Estee Lauder',
      filename: 'index.html',
      template: 'client/template.html',
    }),
    // remove css from js bundle and save it separately in its own file
    new MiniCssExtractPlugin({
      filename: 'css/main.css',
    }),
    new Dotenv(),
  ],
});
