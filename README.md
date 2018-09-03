# parcel-plugin-modernizr [![Build Status](https://travis-ci.com/hirasso/parcel-plugin-modernizr.svg?branch=master)](https://travis-ci.com/hirasso/parcel-plugin-modernizr)
A [Parcel](https://github.com/parcel-bundler/parcel) plugin for generating custom [Modernizr](https://github.com/Modernizr/Modernizr) builds ⚙️

## Installation
```shell
$ npm install parcel-plugin-modernizr -D
$ # OR
$ yarn add parcel-plugin-modernizr -D
```
## Usage
Add your desired modernizr config to your project's `package.json`, for example:

```json
"modernizr": {
  "classPrefix" : "",
  "options": [
    "setClasses",
    "addTest",
    "html5printshiv",
    "load",
    "testProp",
    "fnBind"
  ],
  "feature-detects": [
    "css/pointerevents", "touchevents", "history"
  ]
}
```
Run parcel. The plugin will generate a file named `modernizr-custom.js` inside parcel's `outDir`. Since it has to connect to modernizr's servers, this only happens on first run, not on watch rebuilds.

See [https://github.com/Modernizr/Modernizr/blob/master/lib/config-all.json](https://github.com/Modernizr/Modernizr/blob/master/lib/config-all.json) for all available options.

## Contributing
Pull requests are welcome
