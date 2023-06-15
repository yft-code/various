module.exports = {
  productionSourceMap: false,
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'assets',
  devServer: {
    // host: "localhost",
    // port: 8000, // 端口号
    // open: true, //配置自动启动浏览器
    // 跨域是在开发环境配置的
    hot:true,
    hotOnly:true,
    compress:true,
    proxy:{
      // 将8080映射到8888
      // "/api":"http://localhost:8888"
      "/api":{
        // 默认不支持https
        target:"https://www.vue-js.com/api",//相当于
        changeOrigin: true,//
        // 路径重写
        pathRewrite:{
        "^api":"",//以api开头的路径代换为空字符串
        }
      }
    }
},
lintOnSave:false
}