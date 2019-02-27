import Exception from "../../src/exception";
import { makeHeader } from "./makeHeader";
export function appendData() {
    let data = {};
    let badData = {
        self: null
    };
    badData.self = badData;
    let good = () => {
        let e = new Exception(makeHeader(), "something", false);
        e.appendData("something", data);
        let a = e["appendedMessages"][0];
        expect(a.tag).toBe("something");
        expect(a.text).toBe("{}");
    };
    let bad = () => {
        let e = new Exception(makeHeader(), "something", false);
        e.appendData("something", badData);
        let a = e["appendedMessages"][0];
        expect(a.tag).toBe("something");
        expect(a.text).toBe("Converting circular structure to JSON");
    };
    good();
    bad();
}
