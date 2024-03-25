const path = require('path');

module.exports = {
	entry: './src/indexAbuelo.ts',
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['css-loader'],
			},

			{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
};
