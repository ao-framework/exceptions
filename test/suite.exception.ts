import { Apparatus } from "@ao-framework/acumen";

import { Exception } from "../src";

export class SuiteException {

    public controller({ testAll }: Apparatus) {
        return testAll();
    }

    testExceptionMessage({ expect }: Apparatus) {
        const err = new Exception("something");
        expect(err instanceof Error).equal(true)
        expect(err instanceof Exception).equal(true)
        expect(err.message).equal("something")
        expect(err.name).equal("Exception")
    }

    testCreateMessageList({ expect }: Apparatus) {
        const err = new Exception(["line1", "line2"]);
        expect(err instanceof Error).equal(true)
        expect(err instanceof Exception).equal(true)
        expect(err.message).equal("line1\nline2")
        expect(err.name).equal("Exception")
    }

    testInheritedException({ expect }: Apparatus) {
        class BadInputException extends Exception { }
        const err = new BadInputException(["line1", "line2"]);
        expect(err instanceof Error).equal(true)
        expect(err instanceof Exception).equal(true)
        expect(err.message).equal("line1\nline2")
        expect(err.name).equal("BadInputException")
    }

}
