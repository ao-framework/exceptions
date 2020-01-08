"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gates_1 = require("@ao-framework/gates");
class Exception extends Error {
    /**
     * Creates an instance of an exception
     * @param message
     */
    constructor(message) {
        super(gates_1.isArray(message) ?
            message.join("\n") : message);
        Object.setPrototypeOf(this, new.target.prototype);
        if (typeof Error.captureStackTrace === "function") {
            Error.captureStackTrace(this, this.constructor);
        }
        this.name = new.target.name;
    }
}
exports.Exception = Exception;
//# sourceMappingURL=exception.js.map