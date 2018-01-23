const path = require('path');
const webpack = require('webpack');
const root = path.resolve(__dirname, '..'); // 项目的根目录绝对路径
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.join(root, 'src/main.js'),  // 入口文件路径
  output: {
    path: path.join(root, 'dist'),  // 出口目录
    filename: 'main.js'  // 出口文件名
  },
  // resolve选项：主要用于配置如何对模块进行解析
  resolve: {
    // alias： 配置目录别名
    alias: {
      // 在任意目录下require('components/example') 相当于require('项目根目录/src/components/example')
      components: path.join(root, 'src/components'),
      pages: path.join(root, 'src/pages'),
      store: path.join(root, 'src/store'),
      layout: path.join(root, 'src/layout'),
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.join(root, 'src'),
    },
    // extensions: 表示引入文件时，可以省略的后缀名
    extensions: ['.js', '.vue'], // 引用js和vue文件可以省略后缀名
    // 找不到模块时还会在 node_moduels 中查找，当然，默认也会在node_modules中查找，因此下面的可以不写
    modules: [path.join(root, 'node_modules')]
  },
  resolveLoader: {
    // 找不到的loader，在以下数组目录中找，默认有node_modules，因此以下配置可以不写
    modules: [path.join(root, 'node_modules')]
  },
  // 模块相关配置
  module: {
    // 配置loader
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            loaders: {
              sass: ExtractTextPlugin.extract({
                use: ["css-loader", "sass-loader"],
                fallback: 'vue-style-loader'

              })
            }
          }
        },
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_moduels/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader']
        })
      },
      {
        test: /\.s[c|a]ss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //如果需要，可以在 sass-loader 之前将 resolve-url-loader 链接进来
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
        // vue: {
        //   loaders: {
        //     css: ExtractTextPlugin.extract({
        //       use: ['vue-style-loader', 'css-loader', 'sass-loader']
        //     }),
        //
        //   }
        // }
  // plugins: [
  //   new webpack.LoaderOptionsPlugin({
  //     options: {
  //       vue: {
  //         loaders: {
  //           css: ExtractTextPlugin.extract({
  //             use: ['vue-style-loader', 'css-loader', 'sass-loader']
  //           }),
  //
  //         }
  //       }
  //     }
  //   }),
  //   new webpack.optimize.UglifyJsPlugin(),
  //   new ExtractTextPlugin({
  //     filename: "style.css"
  //   }),
  //
  // ]

}
