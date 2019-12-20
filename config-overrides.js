const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
	fixBabelImports('import'),
	addLessLoader({
		javascriptEnabled: true,
	}),
);