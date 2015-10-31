var path = require('path')
var chai = require('chai')

var grunt = require('grunt')
var stripFileFactory = require('../../lib/strip-file-factory')

chai.should()

describe('stripFileFactory', function () {
  it('should return a function', function () {
    var stripFile = stripFileFactory(grunt, {
      multiline: true,
      singleline: true,
    })

    stripFile.should.be.a('function')
  })

  context('when multiline option is true', function () {
    beforeEach(function() {
      grunt.file.mkdir('tmp')
      grunt.file.copy(
        path.resolve('test', 'fixtures', 'multi-line-comments.txt'),
        path.resolve('tmp', 'multi-line-comments.txt')
      )
    })

    afterEach(function() {
      grunt.file.delete(path.resolve('tmp'))
    })

    it('should parse out multiline comments', function () {
      var results;
      var stripFile = stripFileFactory(grunt, {
        multiline: true,
        singleline: false,
      })

      stripFile(path.resolve('tmp', 'multi-line-comments.txt'))

      results = grunt.file.read(path.resolve('tmp', 'multi-line-comments.txt'))
      results.should.not.contain('/* this is a single asterisk comment */')
      results.should.not.contain('/** this is a double asterisk comment */')
      results.should.contain('/\\/*[a-z]\\\\*/')
    })
  })

  context('when singleline option is true', function () {
    beforeEach(function() {
      grunt.file.mkdir('tmp')
      grunt.file.copy(
        path.resolve('test', 'fixtures', 'single-line-comments.txt'),
        path.resolve('tmp', 'single-line-comments.txt')
      )
    })

    afterEach(function() {
      grunt.file.delete(path.resolve('tmp'))
    })

    it('should parse out singleline comments', function () {
      var results;
      var stripFile = stripFileFactory(grunt, {
        multiline: false,
        singleline: true,
      })

      stripFile(path.resolve('tmp', 'single-line-comments.txt'))

      results = grunt.file.read(path.resolve('tmp', 'single-line-comments.txt'))
      results.should.not.contain('// this is a comment')
      results.should.not.contain('// indented comment here')
      results.should.contain('// oops bad comment here')
    })
  })
})
