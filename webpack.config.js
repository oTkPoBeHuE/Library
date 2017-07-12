"use strict"

// var path = require('path');
var webpack = require('webpack');

module.exports = {
	context: __dirname + '/src/js',
	entry: {
		script: "./script",
	},
	output:{
		//path: path.resolve(__dirname, 'dist'),
		path: __dirname + '/build/js',
		filename: "[name].js",
		//library:  "[name]"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				// query: {
				// 	presets: ['es2015']
				// },
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ["es2015", "stage-0"]
						}
					}
				]
			}
		]
	},

	watch: true,

	watchOptions: {
		aggregateTimeout: 100
	},

	devtool:"inline-source-map"

};

//eval