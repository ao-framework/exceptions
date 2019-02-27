import ExceptionHeader from "../../src/exception.header";
export function makeHeader() {
    let h = new ExceptionHeader();
    h.title = "Something";
    h.subTitle = "something";
    return h;
}
