import "jest";
import ExceptionTests from "./exception/@entry"
import ExceptionGroupTests from "./exception.group/@entry"
import ExceptionTemplateTests from "./exception.template/@entry"


describe("@ao-framework/exceptions", () => {
    describe("exception", ExceptionTests);
    describe("exception.template", ExceptionTemplateTests);
    describe("exception.group", ExceptionGroupTests);
})
