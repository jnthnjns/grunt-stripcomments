module.exports = function (grunt, f, options) {
  var chalk = require('chalk');

  const multilineComment = /^[\t\s]*\/\*\*?[^!][\s\S]*?\*\/[\r\n]/gm
  const singleLineComment = /^[\t\s]*(\/\/)[^\n\r]*[\n\r]/gm

  return function (file) {
    var contents = grunt.file.read(file), dest;

    if ( options.multiline ) {
      contents = contents.replace(multilineComment, '');
    }

    if ( options.singleline ) {
      contents = contents.replace(singleLineComment, '');
    }

    f = f ? f : file;
    dest = !f.dest ? file : f.dest;

    grunt.file.write(dest, contents);
    grunt.log.writeln('File ' + chalk.cyan(dest) + ' created.');
  }
}
