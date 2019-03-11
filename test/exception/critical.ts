import { TestException } from "./@entry";
export function critical() {
    let e = new TestException("message");
    e.critical("something");
    expect(e["tags"][0]).toEqual({
        type: "critical",
        message: "something"
    });
}
