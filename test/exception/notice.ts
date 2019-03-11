import { TestException } from "./@entry";
export function notice() {
    let e = new TestException("message");
    e.notice("something");
    expect(e["tags"][0]).toEqual({
        type: "notice",
        message: "something"
    });
}
