import Exception from "../../src/exception";
import { makeHeader } from "./makeHeader";
export function appendWarning() {
    let e = new Exception(makeHeader(), "something", false);
    e.appendWarning("something");
    let a = e["appendedMessages"][0];
    expect(a.tag).toBe("warning");
    expect(a.text).toBe("something");
}
