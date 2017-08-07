// webpack.config.js
const webpack = require("webpack");
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");

var ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: {
    app: "./src/app.js",
    foo: "./src/foo.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg|jpg)$/i,
        use: ["file-loader?prefix=media/[name].[ext]"]
      },
      {
        test: /\.(woff|woff2)$/,
        include: path.resolve(__dirname, "src"),
        use: ["file-loader?prefix=fonts/"]
      },
      {
        test: /\.ttf$/,
        include: path.resolve(__dirname, "src"),
        use: ["file-loader?prefix=fonts/"]
      },
      {
        test: /\.eot$/,
        include: path.resolve(__dirname, "src"),
        use: ["file-loader?prefix=fonts/"]
      },

      {
        test: /\.css$/,
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src"),
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [["es2015"]]
            }
          }
        ]
      }
    ]
  }
};

module.exports = config;
