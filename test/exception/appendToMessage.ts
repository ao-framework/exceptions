import Exception from "../../src/exception";
import { makeHeader } from "./makeHeader";
export function appendToMessage() {
    let e = new Exception(makeHeader(), "something", false);
    e.appendToMessage("x");
    e.appendToMessage("y", "|");
    expect(e["message"]).toBe("somethingx|y");
}
