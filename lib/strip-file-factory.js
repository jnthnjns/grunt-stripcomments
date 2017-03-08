var reggie = require('./reggie.js');

module.exports = function (grunt, file, filepath, options) {
  var chalk = require('chalk');
  var contents;
  var dest;

  contents = reggie(grunt.file.read(filepath), options);

  dest = file.dest ? file.dest : filepath;
  grunt.file.write(dest, contents);
  grunt.log.writeln('File ' + chalk.cyan(dest) + ' created.');
};
