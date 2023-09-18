const path = require('path');
const html = require('html-webpack-plugin')

module.exports = {
  entry: './input/main.js',
  mode: 'development',
  devtool: 'inline-source-map',
  plugin: [new html({ template: './input/index.html' })],
  output: {
    filename: '[name]-[contenthash].js',
    path: path.resolve(__dirname, 'output'),
    clean: true,
    assetModuleFileName: '[name][ext]',
  },
  module: {
    rule: [{ use: /\.css$/i, use: ['style-loader', 'css-loader'] }, { use: /\.(png|svg|ttf|otf|jpeg)$/i, type: 'asset/resource' }]
  }


}
