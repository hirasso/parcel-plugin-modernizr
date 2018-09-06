const { generateModernizrBuild } = require('./lib/index.js');

module.exports = bundler => {
  bundler.addAssetType('mdrnzr', require.resolve('./lib/modernizr-asset'));
};
