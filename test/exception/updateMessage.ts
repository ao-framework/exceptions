import { TestException } from "./@entry";
export function updateMessage() {
    let e = new TestException("message");
    e["tags"].push({ type: "debug", message: "something" });
    e["updateMessage"]();
    expect(e["message"].indexOf(`[DEBUG] "something"`) > -1).toBe(true);
}
