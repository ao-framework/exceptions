import ExceptionGroup from "../../src";
import Exception from "../../src/exception";
export function create() {
    let eg = new ExceptionGroup("title", "subtitle");
    expect(eg.create("something")).toBeInstanceOf(Exception);
    expect(eg.create()).toBeInstanceOf(Exception);
}
