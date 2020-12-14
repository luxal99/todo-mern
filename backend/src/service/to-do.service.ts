import {getMongoManager} from "typeorm";
import {Category} from "../models/Category";
import {ToDo} from "../models/ToDo";

export class ToDoService {

    protected manager;

    constructor() {
        this.manager = getMongoManager();
    }

    async save(title: string, category: Category): Promise<void> {
        try {
            this.manager.save(new ToDo(title, category))
        } catch (e) {
            throw new Error(e)
        }
    }

    async getAll(): Promise<Category[]> {
        return await this.manager.find(ToDo);
    }
}
