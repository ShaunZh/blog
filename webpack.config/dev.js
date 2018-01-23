const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./base');
const root = path.resolve(__dirname, '../')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = merge(baseConfig, {
  entry: [
    'webpack/hot/dev-server', // 热替换处理入口文件
    path.join(root, 'src/main.js')
  ],
  devServer: {
    historyApiFallback: true,
    inline: true,
    compress: true,
    port: 3000
  },
  devtool: '#eval-source-map',
  plugins: [
    /* definePlugin 接收字符串插入到代码当中, 所以你需要的话可以写上 JS 的字符串 */
    // new webpack.DefinePlugin({
    //   'process.env': config.dev.env
    // }),
    // 参考项目 https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    // new webpack.optimize.OccurenceOrderPlugin(),
    /* HotModule 插件在页面进行变更的时候只会重回对应的页面模块，不会重绘整个 html 文件 */
    new webpack.HotModuleReplacementPlugin(),
    /* 使用了 NoErrorsPlugin 后页面中的报错不会阻塞，但是会在编译结束后报错 */
    // new webpack.NoErrorsPlugin(),
    // 参考项目 https://github.com/ampedandwired/html-webpack-plugin
    /* 将 index.html 作为入口，注入 html 代码后生成 index.html文件 */
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(root, 'src/index.html'),  // 模板文件
      inject: true
    }),
    new ExtractTextPlugin({
      filename: "css/style.css"
    })
  ]
  // plugins: [
  //   new webpack.HotModuleReplacementPlugin(), // 添加热替换插件
  //   new htmlWebpackPlugin({
  //     template: path.join(root, 'src/index.html'),  // 模板文件
  //     inject: 'body'  // 所有的js文件都被注入到body标签下
  //   })
  // ]

});
