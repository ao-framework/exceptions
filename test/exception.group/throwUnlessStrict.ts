import ExceptionGroup from "../../src";
import Exception from "../../src/exception";
export function throwUnlessStrict() {
    let eg = new ExceptionGroup("title", "subtitle");
    expect(() => {
        eg.throwUnlessStrict(false, "ksjdflkjsdf");
    }).toThrow(Exception);
    expect(() => {
        eg.throwUnlessStrict(true, "lkjsdflkjsdf");
    }).not.toThrow();
}
