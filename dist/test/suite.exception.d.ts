import { Apparatus } from "@ao-framework/acumen";
export declare class SuiteException {
    controller({ testAll }: Apparatus): Promise<any[]>;
    testExceptionMessage({ expect }: Apparatus): void;
    testCreateMessageList({ expect }: Apparatus): void;
    testInheritedException({ expect }: Apparatus): void;
}
