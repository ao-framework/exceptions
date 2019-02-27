import exceptionTemplate from "./exception.template";
import ExceptionHeader from "./exception.header";
import AppendedMessage from "./appended.message";

/**
 * ### @ao-framework > exceptions > exception
 * 
 * Definition for an exception
 */
export default class Exception {
    /**
     * ### @ao-framework > exceptions > exception > header
     * 
     * Holds the instance of the exception header
     */
    private header: ExceptionHeader;

    /**
     * ### @ao-framework > exceptions > exception >  message
     * 
     * Holds the message for the exception
     */
    private message: string = "Unknown";

    /**
     * ### @ao-framework > exceptions > exception > info-messages
     * 
     * Holds a list of informational messages that are appended
     * to the exception
     */
    private appendedMessages: AppendedMessage[] = []


    /**
     * ### @ao-framework > exceptions > exception > constructor
     * 
     * Creates the instance of the exception
     * 
     * @param header The header information for the exception
     * @param message The global message for the exception
     */
    public constructor(header: ExceptionHeader, message: string, private attachTrace: boolean) {
        this.header = header;
        this.message = message;
    }

    /**
     * ### @ao-framework > exceptions > exception > set-message
     * 
     * Set the global message of the exception
     * 
     * @param message The string to be set as the exception message
     */
    public setMessage(message: string) {
        this.message = message;
        return this;
    }

    /**
     * ### @ao-framework > exceptions > exception > append-to-message
     * 
     * Add to the global message
     * 
     * @param message The string to append to the global message
     * @param delimiter The string that will placed between the current message and the message to append
     */
    public appendToMessage(message: string, delimiter: string = "") {
        this.message += `${delimiter}${message}`
        return this;
    }

    /**
     * ### @ao-framework > exceptions > exception > append-information
     * 
     * Add to the list of additional informational messages
     * 
     * @param message The message to add
     */
    public appendInformation(message: string) {
        this.appendMessage("info", message);
        return this;
    }

    /**
     * ### @ao-framework > exceptions > exception > append-warning
     * 
     * Add to the list of additional warning messages
     * 
     * @param message The message to add
     */
    public appendWarning(message: string) {
        this.appendMessage("warning", message);
        return this;
    }


    /**
     * ### @ao-framework > exceptions > exception > append-error
     * 
     * Add to the list additional error messages
     * 
     * @param message The message to add
     */
    public appendError(message: string) {
        this.appendMessage("error", message);
        return this;
    }

    public appendMessage(tag: string, message: string) {
        let m = new AppendedMessage();
        m.tag = tag;
        m.text = message;
        this.appendedMessages.push(m);
        return this;
    }

    public appendData(tag: string, data: any) {
        try {
            this.appendMessage(tag, JSON.stringify(data));
        } catch (err) {
            this.appendMessage(tag, err.message)
        }
        return this;
    }

    /**
     * ### @ao-framework > exceptions > exception > to-string
     * 
     * Converts the current exception to a string
     */
    public toString(): string {
        let list = [
            exceptionTemplate.header(this.header),
            exceptionTemplate.message(this.message),
            exceptionTemplate.appendedMessages(this.appendedMessages),
        ]
        return list.join("");
    }

    /**
     * ### @ao-framework > exceptions > exception > throw-exceptions
     * 
     * Throws this exception
     */
    public throwException() {
        if (this.attachTrace) {
            throw new Error(this.toString())
        }
        throw this;
    }
}
