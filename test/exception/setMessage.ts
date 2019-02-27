import Exception from "../../src/exception";
import { makeHeader } from "./makeHeader";
export function setMessage() {
    let e = new Exception(makeHeader(), "something", false);
    e.setMessage("somethingelse");
    expect(e["message"]).toBe("somethingelse");
}
