const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

// eslint-disable-next-line import/no-extraneous-dependencies
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.config.common");

module.exports = merge(commonConfig, {
  // doesnt minify by default
  mode: "development",
  output: {
    path: path.resolve(__dirname, "builds/dev"),
    // new contenthash number everytime underlying code is changed will alert browser that
    // js has changed so it will not cache it.
    filename: "js/[name].[contenthash].js",
    // clean the dev directory of old files
    clean: true,
    assetModuleFilename: "img/[name][ext]",
  },
  // source-map is useful for debugging and seeing the source code in sources
  // this will generate a js.map/css.map source-map file in dev folder
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "builds/dev"),
    },
    port: 3080,
    // opens the webpage immediately on startup
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  plugins: [
    // modifies index.html and keeps it current
    new HtmlWebpackPlugin({
      title: "Estee Lauder Development Env",
      filename: "index.html",
      template: "client/template.html",
    }),
    // remove css from js bundle and save it separately in its own file
    new MiniCssExtractPlugin({
      filename: "css/main.[contenthash].css",
    }),
    new Dotenv(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "client/assets/products",
          to: "img/products",
        },
      ],
    }),
  ],
});
