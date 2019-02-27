import Exception from "../../src/exception";
import { makeHeader } from "./makeHeader";
export function header() {
    let e = new Exception(makeHeader(), "", false);
    expect(e["header"].title === "Something").toBe(true);
    expect(e["header"].subTitle === "something").toBe(true);
}
