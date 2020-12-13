import {GenericController} from "./generic.controller";
import {TO_DO_ROUTE} from "../constants/const";
import {Response, Request} from "express";
import {ToDoService} from "../service/to-do.service";

export class ToDoController extends GenericController {

    constructor(app) {
        super(app);
    }


    routes() {
        this.app.post(TO_DO_ROUTE, async (req: Request, res: Response) => {
            try {
                await new ToDoService().save(req.body.title, req.body.category).then(() => {
                    res.sendStatus(200)
                })
            } catch (e) {
                res.sendStatus(500)
            }
        })
    }
}
