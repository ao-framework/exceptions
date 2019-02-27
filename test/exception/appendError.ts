import Exception from "../../src/exception";
import { makeHeader } from "./makeHeader";
export function appendError() {
    let e = new Exception(makeHeader(), "something", false);
    e.appendError("something");
    let a = e["appendedMessages"][0];
    expect(a.tag).toBe("error");
    expect(a.text).toBe("something");
}
