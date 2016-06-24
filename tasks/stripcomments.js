/*
 * grunt-strip-comments
 * https://github.com/jnthnjns/grunt-strip-comments
 *
 * Copyright (c) 2016 Jonathan Jones
 * Licensed under the MIT license.
 */

 module.exports = function (grunt) {
  var chalk = require('chalk');
  var stripFileFactory = require('../lib/strip-file-factory');

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
           stripFileFactory(grunt, file, filepath, options)
           return true
         })

       }) 
     })
 }
