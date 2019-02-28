const path = require("path");

let conf = {
	mode: "development",
    entry: {
    	main: './src/js/file_name.js',
    },
    output: {
      	filename: '[name].js',
      	path: path.resolve(__dirname, 'dist/js/')
	},
	devServer: {
    	contentBase: path.join(__dirname, 'dist'),
    	compress: false,    
    	port: 9000
  	},
};

module.exports = conf;