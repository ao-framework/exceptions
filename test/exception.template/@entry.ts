import ExceptionHeader from "../../src/exception.header";
import { ExceptionTemplate } from "../../src/exception.template";
import AppendedMessage from "../../src/appended.message";

function makeHeader() {
    let h = new ExceptionHeader()
    h.title = "title";
    h.subTitle = "subtitle";
    return h
}

function header() {
    let template = new ExceptionTemplate()
    expect(template.header(makeHeader())).toBe("title/subtitle\n");
}
function message() {
    let template = new ExceptionTemplate();
    expect(template.message("lksjdflkjsdf")).toBe(`=>> Message: lksjdflkjsdf\n`)
}
function appendedMessages() {
    let template = new ExceptionTemplate();
    let message = new AppendedMessage()
    message.tag = "something";
    message.text = "something";
    expect(template.appendedMessages([message])).toBe("     [SOMETHING] something\n")
}

export default function () {
    let template = (method: string) => `exception.template.${method}`;
    test(template("header"), header)
    test(template("message"), message)
    test(template("appendedMessages"), appendedMessages)
}
