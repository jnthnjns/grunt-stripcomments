var grunt = require('grunt');
var eol = require('eol');
/*
  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/
exports.comments = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },

  css_special_comments: function (test) {
    var actual = grunt.file.read('tmp/special-comments.txt');
    var expected = grunt.file.read('test/expected/special-comments.txt');
    
    // Line endings fix in unit tests
    actual = eol.lf(actual);
    expected = eol.lf(expected);

    test.expect(1);
    test.equal(actual, expected, 'Remove special comments from CSS.');
    test.done();
  },

  css_singleline: function (test) {
    var actual = grunt.file.read('tmp/singleline.css');
    var expected = grunt.file.read('test/expected/css-singleline-expected.css');

    // Line endings fix in unit tests
    actual = eol.lf(actual);
    expected = eol.lf(expected);

    test.expect(1);
    test.equal(actual, expected, 'Remove singleline comments from CSS.');
    test.done();
  },

  css_multiline: function (test) {
    var actual = grunt.file.read('tmp/multiline.css');
    var expected = grunt.file.read('test/expected/css-multiline-expected.css');

    // Line endings fix in unit tests
    actual = eol.lf(actual);
    expected = eol.lf(expected);

    test.expect(1);
    test.equal(actual, expected, 'Remove multiline comments from CSS.');
    test.done();
  },


  js_singleline: function (test) {
    var actual = grunt.file.read('tmp/singleline.js');
    var expected = grunt.file.read('test/expected/js-singleline-expected.js');

    // Line endings fix in unit tests
    actual = eol.lf(actual);
    expected = eol.lf(expected);
    
    test.expect(1);
    test.equal(actual, expected, 'Remove singleline comments from JS.');
    test.done();
  },
  
  js_multiline: function (test) {
    var actual = grunt.file.read('tmp/multiline.js');
    var expected = grunt.file.read('test/expected/js-multiline-expected.js');

    // Line endings fix in unit tests
    actual = eol.lf(actual);
    expected = eol.lf(expected);

    test.expect(1);
    test.equal(actual, expected, 'Remove multiline comments from JS.');
    test.done();
  },

  php_singleline: function (test) {
    var actual = grunt.file.read('tmp/singleline.php');
    var expected = grunt.file.read('test/expected/php-singleline-expected.php');

    // Line endings fix in unit tests
    actual = eol.lf(actual);
    expected = eol.lf(expected);

    test.expect(1);
    test.equal(actual, expected, 'Remove singleline comments from PHP.');
    test.done();
  },

  php_multiline: function (test) {
    var actual = grunt.file.read('tmp/multiline.php');
    var expected = grunt.file.read('test/expected/php-multiline-expected.php');

    // Line endings fix in unit tests
    actual = eol.lf(actual);
    expected = eol.lf(expected);

    test.expect(1);
    test.equal(actual, expected, 'Remove multiline comments from PHP.');
    test.done();
  },

  multiple_files_first: function (test) {
    var actual = grunt.file.read('tmp/multifile/config_test.js');
    var expected = grunt.file.read('test/expected/multifile/config.js');

    // Line endings fix in unit tests
    actual = eol.lf(actual);
    expected = eol.lf(expected);

    test.expect(1);
    test.equal(actual, expected, 'Remove all comments from multiple files.');
    test.done();
  },

  multiple_files_second: function (test) {
    var actual = grunt.file.read('tmp/multifile/file_test.js');
    var expected = grunt.file.read('test/expected/multifile/file.js');

    // Line endings fix in unit tests
    actual = eol.lf(actual);
    expected = eol.lf(expected);

    test.expect(1);
    test.equal(actual, expected, 'Remove all comments from multiple files.');
    test.done();
  },

  single_file: function (test) {
    var actual = grunt.file.read('tmp/singlefile.php');
    var expected = grunt.file.read('test/expected/singlefile.php');

    // Line endings fix in unit tests
    actual = eol.lf(actual);
    expected = eol.lf(expected);

    test.expect(1);
    test.equal(actual, expected, 'Remove all comments from single file.');
    test.done();
  }
};