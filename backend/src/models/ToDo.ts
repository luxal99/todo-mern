import {Column, Entity, ObjectID, ObjectIdColumn} from "typeorm";
import {Category} from "./Category";

@Entity()
export class ToDo {

    @ObjectIdColumn()
    id: string;

    @Column()
    title: string;

    @Column(type => Category)
    idCategory: Category;


    constructor(title?: string, category?: Category) {
        this.title = title;
        this.idCategory = category;
    }
}
