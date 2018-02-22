var webpack = require("webpack");
var path = require('path');

module.exports = {
	entry: {
		app: "./react-src/src/App.js"
	},
	output: {
		filename:"build/bundle.js",
        sourceMapFilename: "build/bundle.map"
	},
    devtool: '#source-map',

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query:{
					presets:['react', 'es2015']
				}
			},
			{
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
		]
	}
}
// module.exports = {
//
//     //define entry point
//     entry: './react-src/src/App.js',
//
//     //define output point
// 		output: {
// 		 		filename:"build/bundle.js",
// 		         sourceMapFilename: "build/bundle.map"
// 		 	},
//
//      module: {
//         loaders: [
//             {
//                 test: /\.jsx?$/,
//                 exclude: /(node_modules)/,
//                 loader: 'babel-loader',
//                 query: {
//                     presets: ['es2015','react']
//                 }
//             },
//             {
//                 test: /\.scss$/,
//                 loader: 'style-loader!css-loader!sass-loader'
//             }
//         ] //loaders
//     } //module
//
// };
