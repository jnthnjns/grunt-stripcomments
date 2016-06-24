'use strict';

var grunt = require('grunt');

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

  css_singleline: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/singleline.css');
    var expected = grunt.file.read('test/expected/css-singleline-expected.css');
    test.equal(actual, expected, 'Remove singleline comments from CSS.');

    test.done();
  },

  css_multiline: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/multiline.css');
    var expected = grunt.file.read('test/expected/css-multiline-expected.css');
    test.equal(actual, expected, 'Remove multiline comments from CSS.');

    test.done();
  },


  js_singleline: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/singleline.js');
    var expected = grunt.file.read('test/expected/js-singleline-expected.js');
    test.equal(actual, expected, 'Remove singleline comments from JS.');

    test.done();
  },
  js_multiline: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/multiline.js');
    var expected = grunt.file.read('test/expected/js-multiline-expected.js');
    test.equal(actual, expected, 'Remove multiline comments from JS.');

    test.done();
  },

  php_singleline: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/singleline.php');
    var expected = grunt.file.read('test/expected/php-singleline-expected.php');
    test.equal(actual, expected, 'Remove singleline comments from PHP.');

    test.done();
  },
  php_multiline: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/multiline.php');
    var expected = grunt.file.read('test/expected/php-multiline-expected.php');
    test.equal(actual, expected, 'Remove multiline comments from PHP.');

    test.done();
  },
  multiple_files_first: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/multifile/config_test.js');
    var expected = grunt.file.read('test/expected/multifile/config.js');
    test.equal(actual, expected, 'Remove all comments from multiple files.');

    test.done();
  },
  multiple_files_second: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/multifile/file_test.js');
    var expected = grunt.file.read('test/expected/multifile/file.js');
    test.equal(actual, expected, 'Remove all comments from multiple files.');

    test.done();
  },
  single_file: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/singlefile.php');
    var expected = grunt.file.read('test/expected/singlefile.php');
    test.equal(actual, expected, 'Remove all comments from single file.');

    test.done();
  }
};
