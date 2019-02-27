import { header } from "./header";
import { message } from "./message";
import { appendedMessages } from "./appendedMessages";
import { setMessage } from "./setMessage";
import { appendToMessage } from "./appendToMessage";
import { appendInformation } from "./appendInformation";
import { appendWarning } from "./appendWarning";
import { appendError } from "./appendError";
import { appendMessage } from "./appendMessage";
import { appendData } from "./appendData";
import { toString } from "./toString";
import { throwException } from "./throwException";

export default function () {
    let template = (method: string) => `exception.${method}`;
    test(template("header"), header)
    test(template("message"), message)
    test(template("appendedMessages"), appendedMessages)
    test(template("setMessage"), setMessage)
    test(template("appendToMessage"), appendToMessage)
    test(template("appendInformation"), appendInformation)
    test(template("appendWarning"), appendWarning)
    test(template("appendError"), appendError)
    test(template("appendMessage"), appendMessage)
    test(template("appendData"), appendData)
    test(template("toString"), toString)
    test(template("throwException"), throwException)
}
