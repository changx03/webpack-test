const path = require('path');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  extry: './src/index.js',
  output: {
    path: '',
    filename: 'bundle.js',
    publicPath: path.resolve(__dirname, 'build')
  }
};
