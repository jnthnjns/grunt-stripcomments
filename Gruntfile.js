/*
 * grunt-strip-comments
 * https://github.com/jnthnjns/grunt-strip-comments
 *
 * Copyright (c) 2016 Jonathan Jones
 * Licensed under the MIT license.
 */
module.exports = function(grunt) {
  grunt.initConfig({
    clean: {
      tests: ['tmp']
    },

    copy: {
      main: {
        files: [
          {src: ['test/fixtures/special-comments.txt'], dest: 'tmp/special-comments.txt'},
          {src: ['test/fixtures/test.css'], dest: 'tmp/multiline.css'},
          {src: ['test/fixtures/test.css'], dest: 'tmp/singleline.css'},
          {src: ['test/fixtures/test.js'], dest: 'tmp/multiline.js'},
          {src: ['test/fixtures/test.js'], dest: 'tmp/singleline.js'},
          {src: ['test/fixtures/test.php'], dest: 'tmp/multiline.php'},
          {src: ['test/fixtures/test.php'], dest: 'tmp/singleline.php'},
          {src: ['test/fixtures/test.php'], dest: 'tmp/singlefile.php'},
          {expand: true, cwd: 'test/fixtures/multifile/', src: ['**'], dest: 'tmp/multifile/'},
        ]
      }
    },

    comments: {
      css_special_comments: {
        options: { keepSpecialComments: false, singleline: false, multiline: false },
        files: {
          'tmp/special-comments.txt': [ 'test/fixtures/special-comments.txt' ]
        }
      },
      css_singleline: {
        options: { singleline: true, multiline: false },
        files: {
          'tmp/singleline.css': [ 'test/fixtures/test.css' ]
        }
      },
      css_multiline: {
        options: { singleline: false, multiline: true },
        src: [ 'test/fixtures/test.css' ],
        dest: 'tmp/multiline.css'
      },
      js_singleline: {
        options: { singleline: true, multiline: false },
        src: [ 'test/fixtures/test.js' ],
        dest: 'tmp/singleline.js'
      },
      js_multiline: {
        options: { singleline: false, multiline: true },
        src: [ 'test/fixtures/test.js' ],
        dest: 'tmp/multiline.js'
      },
      php_singleline: {
        options: { singleline: true, multiline: false },
        src: [ 'test/fixtures/test.php' ],
        dest: 'tmp/singleline.php'
      },
      php_multiline: {
        options: { singleline: false, multiline: true },
        src: [ 'test/fixtures/test.php' ],
        dest: 'tmp/multiline.php'
      },

      multiple_files: {
        src: [ 'tmp/multifile/*.js' ]
      },
      single_file: {
        src: [ 'tmp/singlefile.php' ]
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
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('cleanup', ['clean']);

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', function () {
    grunt.task.run('clean');
    grunt.task.run('copy');

    // Special comments
    grunt.task.run('comments:css_special_comments');
    // CSS
    grunt.task.run('comments:css_singleline');
    grunt.task.run('comments:css_multiline');
    // Javascript
    grunt.task.run('comments:js_singleline');
    grunt.task.run('comments:js_multiline');
    // PHP
    grunt.task.run('comments:php_singleline');
    grunt.task.run('comments:php_multiline');
    // single vs multiple files
    grunt.task.run('comments:single_file');
    grunt.task.run('comments:multiple_files');

    grunt.task.run('nodeunit');
  });

  grunt.registerTask('strip', function () {
    grunt.task.run('clean');
    grunt.task.run('copy');
    // CSS
    grunt.task.run('comments:css_singleline');
    grunt.task.run('comments:css_multiline');
    // Javascript
    grunt.task.run('comments:js_singleline');
    grunt.task.run('comments:js_multiline');
    // PHP
    grunt.task.run('comments:php_singleline');
    grunt.task.run('comments:php_multiline');

    grunt.task.run('comments:single_file');
    grunt.task.run('comments:multiple_files');
  });
};
