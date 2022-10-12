const path = require('path');
// const CompressionWebpackPlugin = require("compression-webpack-plugin"); // 开启gzip压缩， 按需引用
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i; // 开启gzip压缩， 按需写入
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);
const resolve = (dir) => path.join(__dirname, dir);
var webpack=require('webpack');
module.exports = {
    publicPath: "./", // 公共路径
  indexPath: 'index.html' , // 相对于打包路径index.html的路径
  outputDir: process.env.outputDir || 'etaasPlatform', // 'dist', 生产环境构建文件的目录
  assetsDir: 'static', // 相对于outputDir的静态资源(js、css、img、fonts)目录
	//文件名哈希
	filenameHashing: true,
	//用于多页配置，默认是 undefined
    pages: {
		index: {
			// page 的入口文件
			entry: 'src/main.js',
			// 模板文件
			template: 'public/index.html',
			// 在 dist/index.html 的输出文件
			filename: 'index.html',
			// 当使用页面 title 选项时，
			// template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
			title: 'Index Page',
			// 在这个页面中包含的块，默认情况下会包含
			// 提取出来的通用 chunk 和 vendor chunk。
			chunks: ['chunk-vendors', 'chunk-common', 'index'],
		}
	},
    // 将eslint关闭
    lintOnSave:false
}