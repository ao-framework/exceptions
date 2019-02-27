import ExceptionGroup from "../../src";
import Exception from "../../src/exception";
export function throwUnless() {
    let eg = new ExceptionGroup("title", "subtitle");
    expect(() => {
        eg.throwUnless(0, "ksjdflkjsdf");
    }).toThrow(Exception);
    expect(() => {
        eg.throwUnless("lksjdf", "lkjsdflkjsdf");
    }).not.toThrow();
}
