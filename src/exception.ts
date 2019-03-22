import Writer from "@ao-framework/writer";
import { TagInterface } from "./interfaces/tag.interface";
import ExceptionData from "./exception.data";

export default class Exception extends Error {
    /**
     * Holds the instance of the exception data
     */
    private exceptionData: ExceptionData = new ExceptionData();

    /**
     * Holds the list of tags for the exception
     */
    private tags: TagInterface[] = [];

    /**
     * Creates the instance of the exception and handles
     * the underlying functionality for working with 
     * Javascript's base Error
     * @param message 
     */
    public constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
        if (typeof Error.captureStackTrace === "function") {
            Error.captureStackTrace(this, this.constructor)
        }
        this.name = new.target.name;
        this.exceptionData.name = new.target.name
        this.exceptionData.message = message;
        this.updateMessage()
    }

    /**
     * Create an emergency tag that is attached
     * the exception
     * @param message 
     */
    public emergency(message: string) {
        this.tags.push({ type: "emergency", message })
        this.updateMessage()
        return this;
    }

    /**
     * Create an alert tag that is attached
     * the exception
     * @param message 
     */
    public alert(message: string) {
        this.tags.push({ type: "alert", message })
        this.updateMessage()
        return this;
    }

    /**
     * Create a critical tag that is attached
     * the exception
     * @param message 
     */
    public critical(message: string) {
        this.tags.push({ type: "critical", message })
        this.updateMessage()
        return this;
    }

    /**
     * Create an error tag that is attached
     * the exception
     * @param message 
     */
    public error(message: string) {
        this.tags.push({ type: "error", message })
        this.updateMessage()
        return this;
    }

    /**
     * Create a warning tag that is attached
     * the exception
     * @param message 
     */
    public warning(message: string) {
        this.tags.push({ type: "warning", message })
        this.updateMessage()
        return this;
    }

    /**
     * Create a notice tag that is attached
     * the exception
     * @param message 
     */
    public notice(message: string) {
        this.tags.push({ type: "notice", message })
        this.updateMessage()
        return this;
    }

    /**
     * Create an info tag that is attached
     * the exception
     * @param message 
     */
    public info(message: string) {
        this.tags.push({ type: "info", message })
        this.updateMessage()
        return this;
    }

    /**
     * Create a debug tag that is attached
     * the exception
     * @param message 
     */
    public debug(message: string) {
        this.tags.push({ type: "debug", message })
        this.updateMessage()
        return this;
    }

    /**
     * Create a custom tag that is attached
     * the exception
     * @param message 
     */
    public tag(type: string, message: string) {
        this.tags.push({ type, message })
        this.updateMessage();
        return this;
    }

    /**
     * Helper method to update the message of the
     * exception with tags the template view
     */
    private updateMessage() {
        this.exceptionData.tags = this.tags;
        this.message = this.toStringView(this.exceptionData);
    }

    /**
     * Convert the current exception instance to 
     * a json object defined by the view the 
     * toJsonView handler
     */
    public toJson(): string {
        return this.toJsonView(this.exceptionData, this.stack);
    }

    /**
     * Static method to create an instance of this type of exception.
     * It allows for a handler for assigning tag information to the exception
     * in the same express as throwing the exception. 
     * @param this 
     * @param message 
     * @param handler 
     */
    static make<Context extends new (...args: any[]) => any>(this: Context, message: string, handler?: (exception: InstanceType<Context>) => any) {
        let exception: InstanceType<Context> = new this(message);
        if (typeof handler === "function") { handler(exception) }
        return exception;
    }

    /**
     * The default view for the exception message
     * @param exceptionData 
     */
    public toStringView(exceptionData: ExceptionData) {
        let writer = new Writer()
        return writer.line(`"${exceptionData.message}"`, () => {
            exceptionData.tags.forEach(tag => {
                writer.line(`[${tag.type.toUpperCase()}] "${tag.message}"`)
            })
        }).getString()
    }

    /**
     * The handler to convert the exception to a json string
     * @param data 
     * @param stack 
     */
    protected toJsonView(data: ExceptionData, stack: string): string {
        return JSON.stringify({
            isException: true,
            name: data.name,
            date: data.created.toISOString(),
            message: data.message,
            tags: data.tags,
            stack: stack.split("\n").map(line => line.trim()).filter((line, index) => index >= data.tags.length + 1)
        }) + "\n"
    }
}
