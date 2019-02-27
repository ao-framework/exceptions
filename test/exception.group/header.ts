import ExceptionGroup from "../../src";
export function header() {
    let eg = new ExceptionGroup("title", "subtitle");
    expect(eg["header"].title).toBe("title");
    expect(eg["header"].subTitle).toBe("subtitle");
    let eg2 = new ExceptionGroup("title", "subtitle", true);
    expect(eg2["attachTrace"]).toBe(true);
    let eg3 = new ExceptionGroup("title");
    expect(eg3["header"].subTitle).toBe("");
}
