const fs = require('fs');
const path = require('path');
const modernizr = require('modernizr');

/**
 * Generate a Modernizr build, if there is a config found either in .modernizrrc or package.json
 * @param  {Class} bundler The Parcel bundler instance
 * @return {Boolean} Success
 */
function generateModernizrBuild(bundler) {
  const outFileName = "modernizr.js";
  let dest = `${bundler.options.outDir}/${outFileName}`;
  let config = getConfig();
  if( !config ) {
    return false;
  }
  modernizr.build(config, (output) => {
    fs.writeFileSync(dest, output);
    console.log('\x1b[33m%s\x1b[0m', `⚙️  Modernizr build saved to ./${path.relative(process.cwd(), bundler.options.outDir)}/${outFileName}`);
  });
  return true;
}

/**
 * Retrieve Modernizr config from either .modernizrrc or package.json
 * @return {Object|Boolean} Config object or false if none found
 */
function getConfig() {
  let config = getConfigFromFile( `${process.cwd()}/.modernizrrc` );
  config = config ? config : getConfigFromPackage( `${process.cwd()}/package.json` );
  return config;
}

/**
 * Looks for an options file and returns it's contents as if present
 * @param  {String} path The path to the options file (.modernizrrc)
 * @return {Object|Boolean}  the options object if present, otherwise false
 */
function getConfigFromFile( path ) {
  try {
    return JSON.parse(fs.readFileSync(path, 'utf8'));
  } catch (e) {
    return false;
  }
}
/**
 * Looks for a options key "modernizr" inside package.json and returns that if present
 * @param  {String} path The path to the package file
 * @return {Object|Boolean}  the options object if present, otherwise false
 */
function getConfigFromPackage( path ) {
  try {
    package = require(path);
  } catch( e ) {
    return false;
  }
  if( typeof package.modernizr === 'object' ) {
    return package.modernizr;
  }
  return false;
}

module.exports.generateModernizrBuild = (bundler) => generateModernizrBuild(bundler);
module.exports.getConfig = getConfig;
module.exports.getConfigFromFile = path => getConfigFromFile(path);
module.exports.getConfigFromPackage = path => getConfigFromPackage(path);
