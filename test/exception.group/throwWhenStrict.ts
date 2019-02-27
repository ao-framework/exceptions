import ExceptionGroup from "../../src";
import Exception from "../../src/exception";
export function throwWhenStrict() {
    let eg = new ExceptionGroup("title", "subtitle");
    expect(() => {
        eg.throwWhenStrict(true, "ksjdflkjsdf");
    }).toThrow(Exception);
    expect(() => {
        eg.throwWhenStrict(false, "lkjsdflkjsdf");
    }).not.toThrow();
}
