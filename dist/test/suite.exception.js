"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
class SuiteException {
    controller({ testAll }) {
        return testAll();
    }
    testExceptionMessage({ expect }) {
        const err = new src_1.Exception("something");
        expect(err instanceof Error).equal(true);
        expect(err instanceof src_1.Exception).equal(true);
        expect(err.message).equal("something");
        expect(err.name).equal("Exception");
    }
    testCreateMessageList({ expect }) {
        const err = new src_1.Exception(["line1", "line2"]);
        expect(err instanceof Error).equal(true);
        expect(err instanceof src_1.Exception).equal(true);
        expect(err.message).equal("line1\nline2");
        expect(err.name).equal("Exception");
    }
    testInheritedException({ expect }) {
        class BadInputException extends src_1.Exception {
        }
        const err = new BadInputException(["line1", "line2"]);
        expect(err instanceof Error).equal(true);
        expect(err instanceof src_1.Exception).equal(true);
        expect(err.message).equal("line1\nline2");
        expect(err.name).equal("BadInputException");
    }
}
exports.SuiteException = SuiteException;
//# sourceMappingURL=suite.exception.js.map