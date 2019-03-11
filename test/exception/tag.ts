import { TestException } from "./@entry";
export function tag() {
    let e = new TestException("message");
    e.tag("something", "something");
    expect(e["tags"][0]).toEqual({
        type: "something",
        message: "something"
    });
}
