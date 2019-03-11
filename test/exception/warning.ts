import { TestException } from "./@entry";
export function warning() {
    let e = new TestException("message");
    e.warning("something");
    expect(e["tags"][0]).toEqual({
        type: "warning",
        message: "something"
    });
}
