import Exception, { ExceptionData } from "../../src";
import { exceptionData } from "./exceptionData";
import { tags } from "./tags";
import { emergency } from "./emergency";
import { alert } from "./alert";
import { critical } from "./critical";
import { error } from "./error";
import { warning } from "./warning";
import { notice } from "./notice";
import { info } from "./info";
import { debug } from "./debug";
import { tag } from "./tag";
import { updateMessage } from "./updateMessage";
import { toJson } from "./toJson";
import { make } from "./make";
import { alternateConstructor } from "./alternateConstructor";

export class TestException extends Exception { }

export default function () {
    let template = (method: string) => `exception.${method}`
    test(template("exceptionData"), exceptionData)
    test(template("tags"), tags)
    test(template("emergency"), emergency)
    test(template("alert"), alert)
    test(template("critical"), critical)
    test(template("error"), error)
    test(template("warning"), warning)
    test(template("notice"), notice)
    test(template("info"), info)
    test(template("debug"), debug)
    test(template("tag"), tag)
    test(template("updateMessage"), updateMessage)
    test(template("toJson"), toJson)
    test(template("make"), make)
    test(template("alternateConstructor"), alternateConstructor)
}
