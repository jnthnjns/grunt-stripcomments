module.exports = function (grunt, file, filepath, options) {
  var chalk = require('chalk');

  const multilineComment = /^[\t\s]*\/\*\*?[^!][\s\S]*?\*\/[\r\n]/gm
  const specialComments = /^[\t\s]*\/\*!\*?[^!][\s\S]*?\*\/[\r\n]/gm
  const singleLineComment = /^[\t\s]*(\/\/)[^\n\r]*[\n\r]/gm

  options.multiline = (options.multiline == null) ? true : options.multiline;
  options.singleline = (options.singleline == null) ? true : options.singleline;
  options.keepSpecialComments = (options.keepSpecialComments == null) ? true : options.keepSpecialComments;

  var contents = grunt.file.read(filepath), dest;

  if ( options.multiline ) {
    contents = contents.replace(multilineComment, '');
  }

  if ( options.singleline ) {
    contents = contents.replace(singleLineComment, '');
  }

  if ( !options.keepSpecialComments ) {
    contents = contents.replace(specialComments, '');
  }

  dest = file.dest ? file.dest : filepath;
  grunt.file.write(dest, contents);
  grunt.log.writeln('File ' + chalk.cyan(dest) + ' created.');
}
