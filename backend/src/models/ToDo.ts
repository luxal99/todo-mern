import {Column, Entity, ObjectID, ObjectIdColumn} from "typeorm";
import {Category} from "./Category";

@Entity()
export class ToDo {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    title: string;

    @Column(type => Category)
    category: Category;


    constructor(title: string, category: Category) {
        this.title = title;
        this.category = category;
    }
}
