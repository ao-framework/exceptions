import { header } from "./header";
import { create } from "./create";
import { throwMessage } from "./throwMessage";
import { throwWhen } from "./throwWhen";
import { throwWhenStrict } from "./throwWhenStrict";
import { throwUnless } from "./throwUnless";
import { throwUnlessStrict } from "./throwUnlessStrict";

export default function () {
    let template = (method: string) => `exception.group.${method}`;
    test(template("header"), header)
    test(template("create"), create)
    test(template("throwMessage"), throwMessage)
    test(template("throwWhen"), throwWhen)
    test(template("throwWhenStrict"), throwWhenStrict)
    test(template("throwUnless"), throwUnless)
    test(template("throwUnlessStrict"), throwUnlessStrict)
}
