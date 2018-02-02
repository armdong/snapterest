const path = require('path')

module.exports = {
  entry: './source/app.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'snapterest.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
}