var webpack = require('webpack');
var path = require('path');


var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'app');

var config = {
  devtool: 'cheap-module-eval-source-map',

  entry: APP_DIR + '/main.js',

  output: {
    path: BUILD_DIR,
    filename: 'app.js'
  },

  plugins: [],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },

  externals: {},

};

module.exports = config;