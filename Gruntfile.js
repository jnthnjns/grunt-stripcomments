/*
 * grunt-strip-comments
 * https://github.com/jnthnjns/grunt-strip-comments
 *
 * Copyright (c) 2016 Jonathan Jones
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    clean: {
      tests: ['tmp']
    },

    comments: {
      css_singleline: {
        options: {
          singleline: true,
          multiline: false
        },
        files: {
          'tmp/singleline.css': [ 'test/test.css' ] 
        }
      },
      css_multiline: {
        options: {
          singleline: false,
          multiline: true
        },
        src: [ 'test/test.css' ],
        dest: 'tmp/multiline.css'
      },


      js_singleline: {
        options: {
          singleline: true,
          multiline: false
        },
        src: [ 'test/test.js' ],
        dest: 'tmp/singleline.js'
      },
      js_multiline: {
        options: {
          singleline: false,
          multiline: true
        },
        src: [ 'test/test.js' ],
        dest: 'tmp/multiline.js'
      },

      php_singleline: {
        options: {
          singleline: true,
          multiline: false
        },
        src: [ 'test/test.php' ],
        dest: 'tmp/singleline.php'
      },
      php_multiline: {
        options: {
          singleline: false,
          multiline: true
        },
        src: [ 'test/test.php' ],
        dest: 'tmp/multiline.php'
      },

      multiple_files: {
        src: [ 'test/js/*.js' ]
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/lib/strip-file-factory-unit-tests.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', function () {
    grunt.task.run('clean');

    // CSS
    grunt.task.run('comments:css_singleline');
    grunt.task.run('comments:css_multiline');
    // Javascript
    grunt.task.run('comments:js_singleline');
    grunt.task.run('comments:js_multiline');
    // PHP
    grunt.task.run('comments:php_singleline');
    grunt.task.run('comments:php_multiline');

    grunt.task.run('nodeunit');
  });

  grunt.registerTask('strip', function () {
    grunt.task.run('clean');
    grunt.task.run('comments:multiple_files');
  });

};
