import { Apparatus, suiteFromClass } from "@ao-framework/acumen";

import { SuiteException } from "./suite.exception";

class Main {

    public suites = [
        SuiteException
    ];

    public async controller({ suite }: Apparatus) {
        return Promise.resolve()
            .then(() => suite(SuiteException))
    }

}

suiteFromClass(Main).listen();
