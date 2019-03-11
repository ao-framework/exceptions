import { TestException } from "./@entry";
export function toJson() {
    let e = new TestException("message");
    let data = JSON.parse(e.toJson());
    expect(data.isException).toBe(true);
    expect(data.name = "TestException");
    expect(data.message).toBe("message");
    expect(Array.isArray(data.tags)).toBe(true);
    expect(data.tags.length).toBe(0);
    data.stack.forEach(line => {
        expect(typeof line).toBe("string");
    });
}
