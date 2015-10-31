/*
 * grunt-strip-comments
 * https://github.com/kkemple/grunt-strip-comments
 *
 * Copyright (c) 2013 Kurtis Kemple
 * Licensed under the MIT license.
 */

 var chalk = require('chalk');
 var stripFileFactory = require('../lib/strip-file-factory');

 module.exports = function (grunt) {
   // Please see the Grunt documentation for more information regarding task
   // creation: http://gruntjs.com/creating-tasks

   grunt.registerMultiTask(
     'comments',
     'Remove comments from production code',
     function () {
       var options = this.options({
         singleline: true,
         multiline: true,
       })

       this.files.forEach(function (file) {
         var src = file.src.filter(function (filepath) {
           if (!grunt.file.exists(filepath)) {
             grunt.log.warn('Source file ' + chalk.cyan(filepath) + ' not found.')
             return false
           }

           return true
         })

         src.forEach(stripFileFactory(grunt, options))
       })
     })
 }
