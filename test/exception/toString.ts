import Exception from "../../src/exception";
import { makeHeader } from "./makeHeader";
export function toString() {
    let e = new Exception(makeHeader(), "something", false);
    expect(typeof e.toString()).toBe("string");
}
