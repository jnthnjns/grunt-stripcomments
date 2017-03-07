# grunt-stripcomments

[![Build Status](https://travis-ci.org/jnthnjns/grunt-stripcomments.svg?branch=master)](https://travis-ci.org/jnthnjns/grunt-stripcomments)
[![Dependency Status](https://gemnasium.com/badges/github.com/jnthnjns/grunt-stripcomments.svg)](https://gemnasium.com/github.com/jnthnjns/grunt-stripcomments)
[![CircleCI](https://circleci.com/gh/jnthnjns/grunt-stripcomments.svg?style=svg)](https://circleci.com/gh/jnthnjns/grunt-stripcomments)

> Remove comments from code

## Getting Started
This plugin requires Grunt `=>0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-stripcomments --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-stripcomments');
```

## The "comments" task

### Overview
In your project's Gruntfile, add a section named `comments` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  comments: {
    your_target: {
      // Target-specific file lists and/or options go here.
      options: {
          singleline: true,
          multiline: true,
          keepSpecialComments: false
      },
      src: [ 'src/*.js'] // files to remove comments from
    },
  },
});
```

### Options

#### options.keepSpecialComments
Type: `Boolean`
Default value: `true`

Determines whether or not to remove comments starting with `/*!`.

**Note:** NO special comments should be removed if the code is not yours. Special comments are used as attribution and you should consult with the authors before even considering stripping them from the source.

#### options.singleline
Type: `Boolean`
Default value: `true`

Determines whether or not to remove single line comments

#### options.multiline
Type: `Boolean`
Default value: `true`

Determines whether or not to remove multi line comments

### Usage Examples

```js
grunt.initConfig({
  comments: {
    js: {
      options: {
        singleline: true,
        multiline: false
      },
      src: [ 'src/*.js' ]
    },
    php: {
      options: {
        singleline: true,
        multiline: true
      },
      src: [ 'lib/*.php' ]
    }
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
- v 0.1.0 - alpha release

- v 0.5.0 - update to support Grunt 1.0

- v 0.5.1 - update ownership

- v 0.6.0 - added support for file destination and nodeunit testing

- v 0.7.0 - added support for special comments

- v 0.7.1 - lint update

- v 0.7.2 - EOL bug fix in unit tests