var reg = require('../lib/reggie.js');
var os = require('os');
var EOL = os.EOL;

describe("MultiLine:", function () {
    
    const special = "/*!" + EOL + "* here is a comment" + EOL + "*/";
    const multiline = "/**" + EOL + "* here is a comment" + EOL + "*/";
    const singleline_no_asterisk = "";
    const singleline_with_asterisk = "/** here is a comment */";
    const dmitryouFAAF_issue27 = "/**/" + EOL + "Text should still be there" + EOL + "/**/";

    describe("multiline comment", function () {
        it("must be gone", function () {
            expect(
                reg(multiline, { multiline: true, singleline: false, keepSpecialComments: true })
            ).toBe("");
        });
    });

    describe("special comment", function () {
        it("must be there", function () {
            expect(
                reg(multiline, { multiline: false, singleline: false, keepSpecialComments: true })
            ).toBe(multiline);
        });
    });

    describe("issue 27 forward slash asterisk asterisk forward slash", function () {
        it("should not remove text in between", function () {
            expect(
                reg(dmitryouFAAF_issue27, { multiline: false, singleline: false, keepSpecialComments: true })
            ).toBe("Text should still be there");
        });
    });

});