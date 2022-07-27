const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
		entry: './src/index.js',
		mode: 'development',
		devServer: {
		static: './dist',
		},
		plugins: [
		new HtmlWebpackPlugin({
		template: './src/index.html',
		}),
		],
		output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		clean: true,
		},
		module: {
		rules: [
		{
		test: /\.css$/i,
		use: ['style-loader', 'css-loader'],
		},
		],
		},
		optimization: {
		runtimeChunk: 'single',
		},
		};
