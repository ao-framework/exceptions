import { TagInterface } from "./interfaces/tag.interface";

export default class ExceptionData {
    /**
     * Name of the exception
     */
    public name: string;

    /**
     * Message of the exception
     */
    public message: string;

    /**
     * The datetime that the exception was created
     */
    public created: Date = new Date();

    /**
     * Holds the list of tags
     */
    public tags: TagInterface[] = [];
}
