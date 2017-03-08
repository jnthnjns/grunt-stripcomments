module.exports = function (contents, options) {
    const multilineComment = /^[\t\s]*\/\*\*?[^!][\s\S]*?\/($|[\r\n])/gm;
    const specialComments = /^[\t\s]*\/\*!\*?[^!][\s\S]*?\*\/[\r\n]/gm;
    const singleLineComment = /^[\t\s]*(\/\/[^\n\r]*[\n\r]*$|\/\*[^\n\r]*[*]*[\/]$)/gm;

    options.multiline = ('undefined' != typeof options.multiline) ? options.multiline : true;
    options.singleline = ('undefined' != typeof options.singleline) ? options.singleline : true;
    options.keepSpecialComments = ('undefined' != typeof options.keepSpecialComments) ? options.keepSpecialComments : true;

    if (!options.keepSpecialComments) {
        contents = contents.replace(specialComments, '');
    }

    if (options.singleline) {
        contents = contents.replace(singleLineComment, '');
    }

    if (options.multiline) {
        contents = contents.replace(multilineComment, '');
    }

    return contents;
};