import {Column, Entity, ObjectID, ObjectIdColumn} from "typeorm";

@Entity()
export class Category {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    title: string;


    constructor(title?: string) {
        this.title = title;
    }
}
