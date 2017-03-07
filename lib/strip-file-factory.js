module.exports = function (grunt, file, filepath, options) {
  var chalk = require('chalk');
  var contents;
  var dest;

  const multilineComment = /^[\t\s]*\/\*\*?[^!][\s\S]*?\*\/[\r\n]/gm
  const specialComments = /^[\t\s]*\/\*!\*?[^!][\s\S]*?\*\/[\r\n]/gm
  const singleLineComment = /^[\t\s]*(\/\/)[^\n\r]*[\n\r]/gm

  options.multiline = (null === options.multiline || undefined === options.multiline) ? true : options.multiline;
  options.singleline = (null === options.singleline || undefined === options.singleline) ? true : options.singleline;
  options.keepSpecialComments = (null === options.keepSpecialComments || undefined === options.keepSpecialComments) ? true : options.keepSpecialComments;

  contents = grunt.file.read(filepath);

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
