import { TestException } from "./@entry";
export function error() {
    let e = new TestException("message");
    e.error("something");
    expect(e["tags"][0]).toEqual({
        type: "error",
        message: "something"
    });
}
