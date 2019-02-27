import Exception from "../../src/exception";
import { makeHeader } from "./makeHeader";
export function throwException() {
    let e = new Exception(makeHeader(), "something", false);
    let x = new Exception(makeHeader(), "something", true);
    expect(() => {
        e.throwException();
    }).toThrow();
    expect(() => {
        x.throwException();
    }).toThrow();
}
