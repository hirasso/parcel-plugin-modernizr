
module.exports = bundler => {
  bundler.addAssetType('mdrnzr', require.resolve('./lib/modernizr-asset'));
};
