import ExceptionHeader from "./exception.header";
import AppendedMessage from "./appended.message";

/**
 * ### @ao-framework > exceptions > exception-template
 * 
 * Definition for the exception template
 */
export class ExceptionTemplate {

    /**
     * ### @ao-framework > exceptions > exception-template > spaces
     * 
     * Holds the number of spaces for the 
     * indented area for the sub-part of 
     * the template
     */
    public spaces: string = "     ";

    /**
     * ### @ao-framework > exceptions > exception-template > header
     * 
     * Get the template partial for the header
     * 
     * @param header The exception header instance for the exception group
     */
    public header(header: ExceptionHeader): string {
        return `${header.title}/${header.subTitle}\n`
    }

    /**
     * ### @ao-framework > exceptions > exception-template > message
     * 
     * Get the template partial for the message
     * 
     * @param message The main message of the exception
     */
    public message(message: string): string {
        return `=>> Message: ${message}\n`
    }

    /**
     * ### @ao-framework > exceptions > exception-template > appended-message
     * 
     * Get the template partial for the appended messages
     * 
     * @param messages List of the appended messages
     */
    public appendedMessages(messages: AppendedMessage[]): string {
        return messages.map(message => {
            return `${this.spaces}[${message.tag.toUpperCase()}] ${message.text}\n`;
        }).join("")
    }
}

export default new ExceptionTemplate()
