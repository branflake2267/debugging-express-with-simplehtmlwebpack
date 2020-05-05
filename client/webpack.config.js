const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './index.js',
  
  // Build output lands in the ./dist folder
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
    ],
  },
  
  plugins: [
    // Clean the ./dist directory.
    new CleanWebpackPlugin(),
    // Copy the index.html file to the ./dist directory and put the bundle.js in the index.html. 
    new HtmlWebpackPlugin({
      template: './index.html',
    })
  ]
};