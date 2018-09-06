# parcel-plugin-modernizr [![Build Status](https://travis-ci.com/hirasso/parcel-plugin-modernizr.svg?branch=master)](https://travis-ci.com/hirasso/parcel-plugin-modernizr)
A [Parcel](https://github.com/parcel-bundler/parcel) plugin for generating custom [Modernizr](https://github.com/Modernizr/Modernizr) builds ⚙️

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

In your project's source folder, create a file `modernizr.mdrnzr` and put in your Modernizr config, for example:

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

You can also create a file named `.modernizrrc` in your project's root folder and put your config there.

Instead of using a `.modernizrrc`, you can also put your config inside your project's `package.json` under the key "modernizr".

### Config hierarchy:

1. .modernizrrc
2. package.json under key "modernizr"
3. directly inside "modernizr.mdrnzr"

See [https://github.com/Modernizr/Modernizr/blob/master/lib/config-all.json](https://github.com/Modernizr/Modernizr/blob/master/lib/config-all.json) for all available options.

### Option 1: Embedded in html

In your ./src/index.html:

```html
<script src="modernizr.mdrnzr"></script>
```
Terminal: 

```
$ parcel ./src/index.html
```

**Output:**

./dist/index.html:

```html
<script src="modernizr.contentHash.js"></script>
```
./dist/modernizr.contentHash.js: Your custom modernizr build

### Option 2: Direct

Terminal:

```
$ parcel ./src/modernizr.mdrnzr
```
**Output:**

./dist/modernizr.js: Your custom modernizr build


## Contributing
Pull requests are welcome
