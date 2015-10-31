module.exports = function (grunt, options) {
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

    grunt.file.write(file, contents);
  }
}
