const path = require('path')

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "app.js"
  },
  devServer: {
    contentBase: './dist',
    port: 8080,
    inline: true
  },
  devtool: "source-map",
  module: {
    loaders: [
      { test: /\.js$/,  loader: "babel-loader", exclude: /node_modules/ }
    ]
  }
}

module.exports = config
