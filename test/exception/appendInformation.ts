import Exception from "../../src/exception";
import { makeHeader } from "./makeHeader";
export function appendInformation() {
    let e = new Exception(makeHeader(), "something", false);
    e.appendInformation("something");
    let a = e["appendedMessages"][0];
    expect(a.tag).toBe("info");
    expect(a.text).toBe("something");
}
