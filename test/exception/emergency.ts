import { TestException } from "./@entry";
export function emergency() {
    let e = new TestException("message");
    e.emergency("something");
    expect(e["tags"][0]).toEqual({
        type: "emergency",
        message: "something"
    });
}
