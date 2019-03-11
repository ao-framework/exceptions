import { TestException } from "./@entry";
export function alternateConstructor() {
    Error.captureStackTrace = null;
    let e = new TestException("message");
    expect(e).toBeInstanceOf(TestException);
}
