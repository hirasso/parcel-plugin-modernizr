# parcel-plugin-modernizr [![Build Status](https://travis-ci.com/hirasso/parcel-plugin-modernizr.svg?branch=master)](https://travis-ci.com/hirasso/parcel-plugin-modernizr)
A [Parcel](https://github.com/parcel-bundler/parcel) plugin for generating custom [Modernizr](https://github.com/Modernizr/Modernizr) builds ⚙️

### A brief note before you use this plugin:

This is still in early stage, so there might (and will be) breaking changes in the future. I first built this with my personal setup in mind (PHP development, parcel only handling `.js` entryFiles). There is no way (yet) to use this plugin with a single `index.html` as entry file. I'll have to look into how to create a proper custom Parcel Asset to make this work.

## Installation

#### Using NPM

```
$ npm install parcel-plugin-modernizr -D
```
#### Using Yarn
```
$ yarn add parcel-plugin-modernizr -D
```

## Usage

Create a file named `.modernizrrc` in the root folder of your project and put your config inside, for example:

```json
{
  "minify": true,
  "classPrefix" : "",
  "options": [
    "setClasses",
    "addTest"
  ],
  "feature-detects": [
    "css/pointerevents", 
    "touchevents", 
    "history"
  ]
}
```

Instead of using a `.modernizrrc`, you can also put your config inside your project's `package.json` under the key "modernizr", like so:


```json
"modernizr": {
  "minify": false,
  "classPrefix" : "",
  "options": [
    "setClasses",
    "addTest"
  ],
  "feature-detects": [
    "css/pointerevents", 
    "touchevents", 
    "history"
  ]
}
```

The plugin only looks inside `package.json`, if there is no `.modernizrrc` found.

See [https://github.com/Modernizr/Modernizr/blob/master/lib/config-all.json](https://github.com/Modernizr/Modernizr/blob/master/lib/config-all.json) for all available options.

Run `parcel`. The plugin will generate a file named `modernizr-custom.js` inside parcel's `outDir`, based on your config.


## Contributing
Pull requests are welcome
