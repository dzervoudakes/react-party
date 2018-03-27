const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

const BUILD_DIR = path.join(__dirname, '../public');
const ROOT_DIR = path.resolve(__dirname, '../');

module.exports = merge(common, {
	plugins: [
		new ExtractTextPlugin('css/styles.css', {
			allChunks: true
		}),
		new HtmlWebpackPlugin({
			favicon: `${BUILD_DIR}/favicon.ico`,
			filename: 'index.html',
			template: `${ROOT_DIR}/conf/templates/template.html`,
			title: 'Party!'
		})
	],
	output: {
		path: BUILD_DIR,
		filename: 'js/app.js'
	}
});