"use strict";

const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "index.scss"),
  output: {
    path: path.resolve(__dirname),
    filename: "bundle.bootstrap-sass.js"
  },
  devtool: "source-map",
  module: {
    rules: [{
      test: /\.scss$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader",
        options: {
          alias: {
            "../fonts/bootstrap": "bootstrap-sass/assets/fonts/bootstrap"
          }
        }
      }, {
        loader: "sass-loader",
        options: {
          includePaths: [
            path.resolve("./node_modules/bootstrap-sass/assets/stylesheets")
          ]
        }
      }]
    }, {
      test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
      use: [{
        loader: "file-loader"
      }]
    }]
  }
};
