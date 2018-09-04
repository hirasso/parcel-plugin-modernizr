const assert = require('assert');
const { setupBundler } = require('./utils');
const ModernizrPlugin = require('../lib/index');
const path = require('path');
const fs = require('fs-extra');

describe('basic', function() {
  it('Should create a modernizr build', async function() {
    try {
      await fs.emptyDir( path.join(__dirname, './dist') )
      assert( true );
    } catch (err) {
      console.error(err)
    }
    const bundler = await setupBundler(path.join(__dirname, './Integration/Basic/index.html'), {});
    const bundle = await bundler.bundle();

    assert( fs.existsSync( path.join(__dirname, './dist/modernizr.js') ) );
  });
  it('Should load the modernizr config', async function() {
    let config = ModernizrPlugin.getConfig();
    assert( typeof config === 'object' || typeof config === false );
  });
  it('Should load the modernizr config from .modernizrrc', async function() {
    let config = ModernizrPlugin.getConfigFromFile( `${process.cwd()}/.modernizrrc` );
    assert( typeof config === 'object' || typeof config === false );
  });
  it('Should load the modernizr config from package.json', async function() {
    let config = ModernizrPlugin.getConfigFromPackage( `${process.cwd()}/package.json` );
    assert( typeof config === 'object' || typeof config === false );
  });

});
