import { TestException } from "./@entry";
export function tags() {
    let e = new TestException("message");
    expect(Array.isArray(e["tags"])).toBe(true);
}
