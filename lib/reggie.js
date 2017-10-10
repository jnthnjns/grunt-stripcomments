module.exports = function (contents, options) {
    const multilineComment = /^[\t\s]*\/\*\*?[^!][\s\S]*?\/($|[\r\n])/gm;
    const specialComments = /^[\t\s]*\/\*!\*?[^!][\s\S]*?\*\/[\r\n]/gm;
    const singleLineComment = /^[\t\s]*(\/\/[^\n\r]*[\n\r]*$|\/\*[^\n\r]*[*]*[\/][^\n\r]*$)[\t\s]*/gm;
    const htmlCommentsComment = /^[\t\s]*\<\!\-\-+[\s\S]*?\-\-\>[\t\s]?/gm;

    // default to false
    options.htmlComments = ('undefined' != typeof options.htmlComments)
        ? options.htmlComments
        : false;
    // default to true
    options.multiline = ('undefined' != typeof options.multiline) 
        ? options.multiline 
        : true;
    // default to true
    options.singleline = ('undefined' != typeof options.singleline) 
        ? options.singleline 
        : true;
    // default to true
    options.keepSpecialComments = ('undefined' != typeof options.keepSpecialComments) 
        ? options.keepSpecialComments 
        : true;

    if (!options.keepSpecialComments) {
        contents = contents.replace(specialComments, '');
    }

    if (options.singleline) {
        contents = contents.replace(singleLineComment, '');
    }

    if (options.multiline) {
        contents = contents.replace(multilineComment, '');
    }

    if (options.htmlComments) {
        contents = contents.replace(multilineComment, '');
    }

    return contents;
};