const assertBundleTree = require('parcel-assert-bundle-tree');
const assert = require('assert');
const { setupBundler } = require('./utils');
const path = require('path');
const fs = require('fs-extra');

fs.emptyDirSync( path.join(__dirname, './dist') )

function test() {
  describe('Only Script', function() {
    it('Should compile checker.js', async function() {
      const bundler = await setupBundler(path.join(__dirname, './Integration/Basic/checker.js'), {});
      const bundle = await bundler.bundle();
      // Compare bundle to expected
      assertBundleTree(bundle, {
        type: 'js',
        name: 'checker.js',
        assets: ['checker.js'],
        childBundles: undefined
      });
    });
  });
  describe('Direct', function() {
    it('Should create a modernizr build from a modernizr.js as entryPoint', async function() {
      const bundler = await setupBundler(path.join(__dirname, './Integration/Basic/modernizr.mdrnzr'), {});
      const bundle = await bundler.bundle();
      // Compare bundle to expected
      assertBundleTree(bundle, {
        type: 'js',
        name: 'modernizr.js',
        assets: ['modernizr.mdrnzr'],
        childBundles: []
      });
    });
  });
  describe('Embedded', function() {
    it('Should create a modernizr build from a modernizr.mdrnzr embedded in an index.html', async function() {
      const bundler = await setupBundler(path.join(__dirname, './Integration/Basic/index.html'), {});
      const bundle = await bundler.bundle();
      // Compare bundle to expected
      assertBundleTree(bundle, {
        type: 'html',
        name: 'index.html',
        assets: ['index.html'],
        childBundles: [
          {
            type: 'js'
          },
          {
            type: 'js'
          }
        ]
      });
    });
  })
}

test();
