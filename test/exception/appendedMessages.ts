import Exception from "../../src/exception";
import { makeHeader } from "./makeHeader";
export function appendedMessages() {
    let e = new Exception(makeHeader(), "something", false);
    e.appendMessage("something", "lkjsdflkjsdf");
    expect(e["appendedMessages"].length).toBe(1);
}
