const assert = require('assert');
const { setupBundler } = require('./utils');
const path = require('path');
const fs = require('fs-extra');

describe('basic', function() {
  it('Should create a modernizr build based on settings from package.json', async function() {
    this.timeout(0);
    try {
      await fs.emptyDir( path.join(__dirname, './dist') )
      assert( true );
    } catch (err) {
      console.error(err)
    }

    const bundler = await setupBundler(path.join(__dirname, './Integration/Basic/index.html'), {});
    const bundle = await bundler.bundle();


    setTimeout(() => {
      let modernizrBuildExists = fs.existsSync( path.join(__dirname, './dist/modernizr-custom.js') );
      assert( modernizrBuildExists );
    }, 0);

  });
});
