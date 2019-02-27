import Exception from "../../src/exception";
import { makeHeader } from "./makeHeader";
export function appendMessage() {
    let e = new Exception(makeHeader(), "something", false);
    e.appendMessage("t", "something");
    let a = e["appendedMessages"][0];
    expect(a.tag).toBe("t");
    expect(a.text).toBe("something");
}
