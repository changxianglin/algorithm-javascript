const path = require('path');

module.exports = {
  mode: 'development',
  entry: './demo3.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  devServer: {
    contentBase: './dist',
  }
};