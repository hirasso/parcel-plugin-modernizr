const Bundler = require('parcel-bundler');
const path = require('path');
const ModernizrPlugin = require('../index');

async function setupBundler(input, options) {
  const bundler = new Bundler(input, Object.assign({
    outDir: path.join(__dirname, 'dist'),
    watch: false,
    cache: false,
    hmr: false,
    logLevel: 0,
    publicUrl: './'
  }, options));
  await ModernizrPlugin(bundler);
  return bundler;
}

exports.setupBundler = setupBundler;
