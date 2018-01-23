const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./base')
const root = path.resolve(__dirname, '..')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var assetsPath = path.join(root, 'assets');

module.exports = merge(baseConfig, {
  // resolve: {
  //   alias: {
  //     vue: 'vue/dist/vue.js'
  //   }
  // } ,
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(root, 'src/index.html'), // 模板文件
      inject: 'body' // js的script注入到body底部
    }),
    new ExtractTextPlugin({
      filename: "css/style.css"
    }),
    // copy custom static assets
  ]
});
