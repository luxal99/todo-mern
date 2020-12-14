import {CategoryService} from "../service/category.service";
import {getMongoManager} from "typeorm";
import {Category} from "../models/Category";
import {Response, Request} from "express";
import {CATEGORY_ROUTE, TO_DO_ROUTE} from "../constants/const";
import {GenericController} from "./generic.controller";
import {ToDoService} from "../service/to-do.service";

export class CategoryController extends GenericController {
    constructor(app) {
        super(app);
    }
    routes() {

        this.app.get(CATEGORY_ROUTE, async (req, res) => {
            try {
                res.send(await new CategoryService().getAll());
            } catch (e) {
                res.sendStatus({err:e})
            }
        });

        this.app.post(CATEGORY_ROUTE, async (req: Request, res: Response) => {
            try {
                await getMongoManager().save(new Category(req.body.title)).then(() => {
                    res.sendStatus(200)
                })

            } catch (e) {
                res.sendStatus({err:e})
            }
        });

        this.app.delete(CATEGORY_ROUTE,async (req:Request,res:Response)=>{
            try{
                await new CategoryService().delete(req.query.id).then(()=>{
                    res.sendStatus(200)
                });
            }catch (e){
                res.send({err:e})
            }
        })
    }
}
