const { Asset } = require('parcel-bundler');
const Modernizr = require('modernizr');
const path = require('path');

class ModernizrAsset extends Asset {
  constructor(name, pkg, options) {
    super(name, pkg, options);
    this.type = 'js';
  }
  async parse() {
    let config = JSON.parse( this.contents );
    const customConfig = await this.getConfig(['.modernizrrc', 'package.json']);
    if (customConfig) {
      config = Object.assign(config, customConfig.modernizr || customConfig);
    }
    let promise = new Promise((resolve, reject) => {
      Modernizr.build(config, (output) => {
        resolve( output );
      });
    });
    this.contents = await promise;
  }
}
module.exports = ModernizrAsset;
