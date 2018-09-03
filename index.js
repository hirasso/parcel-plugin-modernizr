const fs = require('fs');
const path = require('path');
const modernizr = require('modernizr');

module.exports = function (bundler) {
  // generateModernizrFile(bundler);
  bundler.on('bundled', () => generateModernizrFile(bundler));
};

function generateModernizrFile(bundler) {
  let destination = `${bundler.options.outDir}/modernizr-custom.js`;
  let options = getOptions();
  

  modernizr.build(options, (result) => {
    fs.writeFile(destination, result, function(err) {
      if (err) {
        return console.error(err);
      }
      console.log(`⚙️  Modernizr build saved to ./${path.relative(__dirname, bundler.options.outDir)}/modernizr-custom.js`);
    });
  });
}

function getOptions() {
  let packagePath = `${process.cwd()}/package.json`;
  let options = {};
  let package = null;

  try {
    package = require(packagePath);
  } catch( e ) {
    console.error( `[parcel-plugin-modernizr] Couldn't find package.json` );
  }

  if( typeof package.modernizr === 'object' ) {
    options = package.modernizr;
  } else {
    console.error( `[parcel-plugin-modernizr] No modernizr config found in package.json` );
  }
  return options;
}
