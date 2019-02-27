import ExceptionGroup from "../../src";
import Exception from "../../src/exception";
export function throwWhen() {
    let eg = new ExceptionGroup("title", "subtitle");
    expect(() => {
        eg.throwWhen("sdfsdf", "ksjdflkjsdf");
    }).toThrow(Exception);
    expect(() => {
        eg.throwWhen(0, "lkjsdflkjsdf");
    }).not.toThrow();
}
