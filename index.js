const { generateModernizrBuild } = require('./lib/index.js');

module.exports = bundler => {
  // generateModernizrBuild(bundler);
  bundler.on('bundled', () => generateModernizrBuild(bundler));
};
