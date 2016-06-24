module.exports = function (grunt, f, options) {
  var chalk = require('chalk');

  const multilineComment = /^[\t\s]*\/\*\*?[^!][\s\S]*?\*\/[\r\n]/gm
  const singleLineComment = /^[\t\s]*(\/\/)[^\n\r]*[\n\r]/gm

  return function (file) {
    var contents = grunt.file.read(file);

    if ( options.multiline ) {
      contents = contents.replace(multilineComment, '');
    }

    if ( options.singleline ) {
      contents = contents.replace(singleLineComment, '');
    }

    f.dest = !f.dest ? file : f.dest;

    grunt.file.write(f.dest, contents);
    grunt.log.write('File ' + chalk.cyan(f.dest) + ' created.');
  }
}
