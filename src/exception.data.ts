import { TagInterface } from "./interfaces/tag.interface";

export default class ExceptionData {
    public name: string;
    public message: string;
    public created: Date = new Date();
    public tags: TagInterface[] = [];
}
