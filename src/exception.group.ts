import ExceptionHeader from "./exception.header";
import Exception from "./exception";

/**
 * ### @ao-framework > exceptions > exception-group
 * 
 * Definition for an exception group
 */
export class ExceptionGroup {

    /**
     * ### @ao-framework > exceptions > exception-group > header
     * 
     * Holds the header instance for the group
     */
    public header: ExceptionHeader;

    /**
     * ### @ao-framework > exceptions > exception-group > constructor
     * 
     * Creates an instance of an exception group
     * 
     * @param title The title of the exception group
     * @param subTitle The subtitle of the exception group
     * @param attachTrace whether or not to attach a stack trace to the exception
     */
    constructor(title: string, subTitle = "", private attachTrace: boolean = false) {
        let header = new ExceptionHeader();
        header.title = title;
        header.subTitle = subTitle;
        this.header = header;
    }

    /**
     * ### @ao-framework > exceptions > exception-group > create
     * 
     * Create an exception instance 
     * 
     * @param message Optional message for the exception
     */
    public create(message: string = "") {
        return new Exception(this.header, message, this.attachTrace);
    }

    /**
     * ### @ao-framework > exceptions > exception-group > throw-message
     * 
     * Helper method to throw exceptions with either a message
     * string or an instance of the exception
     * 
     * @param message string message for the exception or exception instance
     */
    private throwMessage(message: string | Exception) {
        let exception: Exception = null;
        if (message instanceof Exception) {
            exception = message;
        }
        if (typeof message === "string") {
            exception = this.create(message);
        }
        exception.throwException();
    }

    /**
     * ### @ao-framework > exceptions > exception-group > throw-when
     * 
     * Throw an exception when the condition is truthy
     * 
     * @param condition Whether or not to throw
     * @param message string message for the exception or exception instance
     */
    public throwWhen(condition: any, message: string | Exception) {
        if (condition) {
            this.throwMessage(message)
        }
    }

    /**
    * ### @ao-framework > exceptions > exception-group > throw-when-strict
    * 
    * Throw an exception when the condition is exact true
    * 
    * @param condition Whether or not to throw
    * @param message string message for the exception or exception instance
    */
    public throwWhenStrict(condition: boolean, message: string | Exception) {
        if (condition === true) {
            this.throwMessage(message);
        }
    }

    /**
     * ### @ao-framework > exceptions > exception-group > throw-unless
     * 
     * Throw an exception unless condition is truthy
     * 
     * @param condition Whether or not to throw
     * @param message string message for the exception or exception instance
     */
    public throwUnless(condition: any, message: string | Exception) {
        if (!condition) {
            this.throwMessage(message);
        }
    }

    /**
     * ### @ao-framework > exceptions > exception-group > throw-unless
     * 
     * Throw an exception unless condition is exactly true
     * 
     * @param condition Whether or not to throw
     * @param message string message for the exception or exception instance
     */
    public throwUnlessStrict(condition: any, message: string | Exception) {
        if (condition === false) {
            this.throwMessage(message);
        }
    }
}
