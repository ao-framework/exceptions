"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const acumen_1 = require("@ao-framework/acumen");
const suite_exception_1 = require("./suite.exception");
class Main {
    constructor() {
        this.suites = [
            suite_exception_1.SuiteException
        ];
    }
    async controller({ suite }) {
        return Promise.resolve()
            .then(() => suite(suite_exception_1.SuiteException));
    }
}
acumen_1.suiteFromClass(Main).listen();
//# sourceMappingURL=main.js.map