const fs = require('fs');
const modernizr = require('modernizr');

module.exports = function (bundler) {
  generateModernizrFile(bundler);
  // bundler.on('bundled', () => generateModernizrFile(bundler));
};

function generateModernizrFile(bundler) {
  // console.log( bundler.options.production );
  let destination = `${bundler.options.outDir}/modernizr-custom.js`;
  let packagePath = `${process.cwd()}/package.json`;
  let pkg = null;

  try {
    pkg = require(packagePath);
  } catch( e ) {
    console.error( `[parcel-plugin-modernizr] Couldn't find package.json` );
  }
  
  if( !pkg.modernizr ) {
    console.error( `[parcel-plugin-modernizr] No modernizr config found in package.json` );
  }
  modernizr.build(pkg.modernizr, (result) => {
    fs.writeFile(destination, result, function(err) {
      if (err) {
        return console.error(err);
      }
      console.log(`Modernizr build saved to ${destination}`);
    });
  });
  

}
