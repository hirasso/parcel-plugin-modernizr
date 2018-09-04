# parcel-plugin-modernizr [![Build Status](https://travis-ci.com/hirasso/parcel-plugin-modernizr.svg?branch=master)](https://travis-ci.com/hirasso/parcel-plugin-modernizr)
A [Parcel](https://github.com/parcel-bundler/parcel) plugin for generating custom [Modernizr](https://github.com/Modernizr/Modernizr) builds ⚙️

## Installation
#### Using Yarn
```
$ yarn add parcel-plugin-modernizr -D
```
#### Using NPM

```
$ npm install parcel-plugin-modernizr -D
```
## Usage

Create a file named `.modernizrrc` in the root folder of your project and put your config inside, for example:

```json
"modernizr": {
  "minify": true,
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

**Hint**: You can also put your config inside your project's `package.json`, if you like the concept of a "single source of truth". It only looks inside `package.json`, if there is no `.modernizrrc` found.

See [https://github.com/Modernizr/Modernizr/blob/master/lib/config-all.json](https://github.com/Modernizr/Modernizr/blob/master/lib/config-all.json) for all available options.

Run `parcel`. The plugin will generate a file named `modernizr.js` inside parcel's `outDir`, based on your config.


## Contributing
Pull requests are welcome
