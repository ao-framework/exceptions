import { TestException } from "./@entry";
export function info() {
    let e = new TestException("message");
    e.info("something");
    expect(e["tags"][0]).toEqual({
        type: "info",
        message: "something"
    });
}
