import {Response, Request} from "express";
import {getMongoManager} from "typeorm";
import {Category} from "../models/Category";

export class CategoryService {

    protected manager;

    constructor() {
        this.manager = getMongoManager();
    }

    async save(title: string): Promise<void> {
        try {
            this.manager.save(new Category(title))
        } catch (e) {
            throw new Error(e)
        }
    }

    async getAll(): Promise<Category[]> {
        return await this.manager.find(Category);
    }

}
