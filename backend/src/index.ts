import "reflect-metadata";
import express = require("express");
import {createConnection, getMongoManager} from "typeorm";
import {Category} from "./models/Category";
import {ToDo} from "./models/ToDo";
import {Response, Request} from "express";
import bodyParser = require("body-parser");
import {CategoryController} from "./controllers/category.controller";
import {PORT} from "./constants/const";

const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());


app.listen(PORT, async () => {
    console.log('Listen on port:', PORT)

    await createConnection({
        type: "mongodb",
        host: "localhost",
        useUnifiedTopology: true,
        port: 27017,
        database: "todos",
        entities: [Category, ToDo],
    }).catch((err) => {
        console.log(err)
    })

})

new CategoryController(app)
