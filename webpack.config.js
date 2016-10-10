// Path对象，用于处理目录对象
var path = require('path');
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

// 导入模块
module.exports = {
	// 入口文件地址
	entry: {
		main: './src/main',
		vendors: ['vue', 'vue-router']
		// jquery: ['./src/lib/jquery.js']
	},
	// 输出
	output: {
		// 创建目录
		path: path.join(__dirname, './dist'),
		// 设置公共文件生成的地址
		publicPath: '/dist/',
		// 文件名
		filename: '[name].js',
    	chunkFilename: '[name].[hash].js'
	},
	// 服务器配置，设置自动刷新
	devServer: {
		historyApiFallback: true,
		hot: false,
		inline: true,
		grogress: true
	},
	// 模块加载器
	module: {
		loaders: [
		// 解析.vue文件
			{ test: /\.vue$/, loader: 'vue' },
		// 转化ES6的语法
			{ test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
		// 编译css并自动添加css前缀
			{ test: /\.css$/, loader: 'style!css!autoprefixer' },
		// .scss 文件想要编译，scss就需要这些东西！来编译处理
		// install css-loader style-loader sass-loader node-sass --save-dev
			{ test: /\.scss$/, loader: 'style!css!sass?sourceMap' },
		// 图片转化，小于8k自动转化为base64的编码
			{ test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192' },
		// html模版编译
			{ test: /\.(html|tpl)$/, loader: 'html-loader' }
		]
	},
	vue: {
		loaders: {
			css: 'style!css!autoprefixer'
		}
	},
	babel: {
		presets: ['es2015'],
		plugins: ['transform-runtime']
	},
	resolve: {
		// require时省略的扩展名，如：require('module')不需要module.js
		extensions: ['', '.js', '.vue'],
		// 别名，可以直接使用别名来代表设定的路径以及其他
		alias: {
			filter: path.join(__dirname, './src/filters'),
			components: path.join(__dirname, './src/components')
		}
	},
	// 开启source-map，webpack有多种source-map，在官网文档可以查到
	// devtool: 'eval-source-map'
	
}