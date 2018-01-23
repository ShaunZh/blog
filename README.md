# Blog过程

## 参考资料

- [webpack使用](https://github.com/varHarrie/YmxvZw/issues/7)
- [webpack资料](http://www.css88.com/doc/webpack2/concepts/module-resolution/)
- [使用webpack搭建vue项目](http://www.qinshenxue.com/article/20161118151423.html)
- [官方vue的webpack配置](https://github.com/vuejs-templates/webpack-simple/blob/master/template/webpack.config.js)
- [markdown解析](http://www.gonjay.com/blog/2014/07/11/markdownde-chun-qian-duan-jie-jue-fang-an/)
- [marked解析markdown](https://github.com/chjj/marked)
- [博客参考](http://www.tdon.site/)
- [webpack3 vue2配置](http://www.qinshenxue.com/article/20161118151423.html)
- [nginx配置](https://www.zybuluo.com/phper/note/89391)


## 注意

- webpack2和webpack3有很大区别，要主要使用的webpack版本

## 过程

- `npm init`
- 安装webpack： `npm i -D webpack`
- 建立项目文件夹
- 配置webpack

### 配置webpack

新建三份webpack文件：`webpack.base.config.js`、`webpack.dev.config.js`和`webpack.prod.config.js`
配置webpack主要从以下几个方面进行：

- 配置`resolve`
- 配置`module`

### 配置babel

主要使用babel来解析js文件，主要的babel模块有：

- `babel-core`
- `babel-loader`
- `babel-polyfill`
- `babel-preset-es2015`

### 配置`webpack-dev-server`

`webpack-dev-server`主要用于监听文件的改变，并实时打包；
**`webpack --watch`监听文件改动并打包**
`webpack`的`webpack --watch`命令也可以做到监听文件的改动并实时打包，但是其**不能做到`hot replace`(热替换)**，同时，不能根据文件的改变实时的刷新页面，**必须手动刷新**，因此出现了`webpack-dev-server`

`webpack-dev-server`克服了`webpack --watch`的上述两个问题。它主要启动了一个**使用`express`的http服务器**，这个http服务与client采用`websocket`通信协议，原始文件更改后，`webpack-dev-server`会实时编译，但是**编译后的文件并没有输出到我们在webpack中配置的`output`指定的目录下，即：

```js
output: {
    path: path.join(root, 'dist'),  // 出口目录
    filename: 'main.js'  // 出口文件名
  }
```
**注意**：你启动webpack-dev-server后，你在目标文件夹中是看不到编译后的文件的,实时编译后的文件都保存到了内存当中。因此很多同学使用webpack-dev-server进行开发的时候都看不到编译后的文件

**参考**

- [webpack-dev-server使用方法](https://segmentfault.com/a/1190000006670084)

### 配置vue环境

**webpack配置**

```js
module: {
    // 配置loader支持vue
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
    ]
}
```

**需要的npm包**

- `vue-loader`
- `vue-template-compiler`


### 配置vue中使用css

想要支持import / require引入CSS文件，则需要配置对应的 Rule
```js
module: {
    // 配置loader支持vue
  rules: [
    {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
    }
  ]
}
```

### 提取`.vue`文件中的css代码
先配置vue文件中css解析规则
```
  module: {
    // 配置loader
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            loaders: {
              css: ExtractTextPlugin.extract({
                use: 'css-loader'
              }),
              stylus: ExtractTextPlugin.extract({
                use: ["css-loader", "sass-loader"]
              })
            }
          }
        },
      },
    ]
  }
```
配置插件
```
  plugins: [
    new ExtractTextPlugin({
      filename: "css/style.css"
    })
  ]
```

**重要**：在使用ExtractTextPlugin插件时有一个需要注意的地方 ：**当合并webpack配置时(base.js和dev.js)，不能在两个文件中同时写入`module.exports.plugins`，否则会报错，
另外，webpack2和webpack3有很大区别，要主要使用的webpack版本

### 配置使用css的预处理器
需要安装：
`npm i -D sass-loader node-sass`
如果安装node-sass太慢，可以单独为其设置资源路径：`npm set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass`

```js
module: {
    // 配置loader支持vue
  rules: [
    {
      test: /\.s[c|a]ss$/,
      use: ['vue-style-loader', 'css-loader', 'sass-loader']
    }
  ]
},
```

在vue文件的style标签内添加：`lang=scss`，如果需要vscode支持scss语法高亮，需要在设置中添加如下配置：

```js
 "files.associations": {
    "*.vue": "vue"
},
```

并安装`vetur`插件

### 提取css到单独的文件

