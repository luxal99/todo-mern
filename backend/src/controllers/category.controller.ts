import {CategoryService} from "../service/category.service";
import {getMongoManager} from "typeorm";
import {Category} from "../models/Category";
import {Response, Request} from "express";
import {CATEGORY_ROUTE} from "../constants/const";

export class CategoryController {

    protected app: any = null;

    constructor(app) {
        this.app = app;
        this.routes();
    }

    protected routes() {

        this.app.get(CATEGORY_ROUTE, async (req, res) => {
            try {
                res.send(await new CategoryService().getAll());
            } catch (e) {
                res.sendStatus(500)
            }
        });

        this.app.post(CATEGORY_ROUTE, async (req: Request, res: Response) => {
            try {
                await getMongoManager().save(new Category(req.body.title)).then(() => {
                    res.sendStatus(200)
                })

            } catch (e) {
                res.sendStatus(500)
            }
        });
    }
}
