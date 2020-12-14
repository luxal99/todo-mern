import {getMongoManager, getMongoRepository} from "typeorm";
import {Category} from "../models/Category";
import {ToDo} from "../models/ToDo";

export class ToDoService {

    protected repository;

    constructor() {
        this.repository = getMongoRepository(ToDo);
    }

    async save(title: string, category: Category): Promise<void> {
        try {
            this.repository.save(new ToDo(title, category))
        } catch (e) {
            throw new Error(e)
        }
    }

    async getAll(): Promise<Category[]> {
        return await this.repository.find();
    }

    async delete(id: string) {
        await this.repository.findOne(id).then(async resp => {
            await this.repository.delete(resp)
        })
    }
}
