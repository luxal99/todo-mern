import {Response, Request} from "express";
import {getMongoManager, getMongoRepository} from "typeorm";
import {Category} from "../models/Category";
import {ToDo} from "../models/ToDo";

export class CategoryService {

    protected repository;

    constructor() {
        this.repository = getMongoRepository(Category);
    }

    async save(title: string): Promise<void> {
        try {
            this.repository.save(new Category(title))
        } catch (e) {
            throw new Error(e)
        }
    }

    async getAll(): Promise<Category[]> {
        return await this.repository.find();
    }

    async delete(id:string):Promise<void>{
        await this.repository.findOne(id).then(async resp => {
            await this.repository.delete(resp)
        })
    }

}
