module.exports = function (grunt, file, filepath, options) {
  var chalk = require('chalk');

  const multilineComment = /^[\t\s]*\/\*\*?[^!][\s\S]*?\*\/[\r\n]/gm
  const singleLineComment = /^[\t\s]*(\/\/)[^\n\r]*[\n\r]/gm

  var contents = grunt.file.read(filepath), dest;

  if ( options.multiline ) {
    contents = contents.replace(multilineComment, '');
  }

  if ( options.singleline ) {
    contents = contents.replace(singleLineComment, '');
  }

  dest = file.dest ? file.dest : filepath;
  grunt.file.write(dest, contents);
  grunt.log.writeln('File ' + chalk.cyan(dest) + ' created.');
}
