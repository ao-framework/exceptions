import { ExceptionData } from "../../src";
import { TestException } from "./@entry";
export function exceptionData() {
    let e = new TestException("message");
    expect(e["exceptionData"]).toBeInstanceOf(ExceptionData);
}
