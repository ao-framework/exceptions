import ExceptionGroup from "../../src";
import Exception from "../../src/exception";
export function throwMessage() {
    let eg = new ExceptionGroup("title", "subtitle");
    expect(() => {
        eg["throwMessage"]("something");
    }).toThrow(Exception);
    expect(() => {
        eg["throwMessage"](eg.create("lskjdf"));
    }).toThrow(Exception);
}
