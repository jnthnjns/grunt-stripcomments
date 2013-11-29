/*
 * grunt-strip-comments
 * https://github.com/kkemple/grunt-strip-comments
 *
 * Copyright (c) 2013 Kurtis Kemple
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('strip_comments', 'Remove comments from production code', function() {

    var mulitlineComment = /\/\*(.|\n|\t|\r)+\*\//gm;
    var singleLineComment = /\/\/.+/g;

    this.files[0].src.forEach(function (file) {

      var contents = grunt.file.read(file);

      contents = contents.replace(mulitlineComment, '');
      contents = contents.replace(singleLineComment, '');

      grunt.file.write(file, contents);
    });

  });
};
