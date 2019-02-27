import Exception from "../../src/exception";
import { makeHeader } from "./makeHeader";
export function message() {
    let e = new Exception(makeHeader(), "something", false);
    expect(e["message"]).toBe("something");
}
