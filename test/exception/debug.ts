import { TestException } from "./@entry";
export function debug() {
    let e = new TestException("message");
    e.debug("something");
    expect(e["tags"][0]).toEqual({
        type: "debug",
        message: "something"
    });
}
