import { TestException } from "./@entry";
export function alert() {
    let e = new TestException("message");
    e.alert("something");
    expect(e["tags"][0]).toEqual({
        type: "alert",
        message: "something"
    });
}
