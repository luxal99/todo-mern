import {GenericController} from "./generic.controller";
import {TO_DO_ROUTE} from "../constants/const";
import {Response, Request} from "express";
import {ToDoService} from "../service/to-do.service";

export class ToDoController extends GenericController {

    constructor(app) {
        super(app);
    }


    routes() {
        this.app.get(TO_DO_ROUTE, async (req, res) => {
            try {
                res.send(await new ToDoService().getAll());
            } catch (e) {
                res.sendStatus(500)
            }
        });

        this.app.delete(TO_DO_ROUTE,async (req:Request,res:Response)=>{
            try{
                await new ToDoService().delete(req.query.id).then(()=>{
                    res.sendStatus(200)
                });
            }catch (e){
                res.send({err:e})
            }
        })
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
