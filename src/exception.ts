import { isArray } from "@ao-framework/gates";

export class Exception extends Error {

    /**
     * Creates an instance of an exception
     * @param message 
     */
    public constructor(message: string | string[]) {
        super(isArray(message) ?
            message.join("\n") : message);
        Object.setPrototypeOf(this, new.target.prototype);
        if (typeof Error.captureStackTrace === "function") {
            Error.captureStackTrace(this, this.constructor)
        }
        this.name = new.target.name;
    }

}
