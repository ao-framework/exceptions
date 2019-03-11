import { TestException } from "./@entry";
export function make() {
    let exception = TestException.make("message", (exception) => {
        expect(exception).toBeInstanceOf(TestException);
    });
    expect(exception).toBeInstanceOf(TestException);
    let exception2 = TestException.make("message");
    expect(exception2).toBeInstanceOf(TestException);
}
