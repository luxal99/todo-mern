import "reflect-metadata";
import express = require("express");
import {createConnection} from "typeorm";
import bodyParser = require("body-parser");
import {CategoryController} from "./controllers/category.controller";
import {ENTITIES, PORT} from "./constants/const";
import {ToDoController} from "./controllers/to-do.controller";

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
        entities: ENTITIES,
    }).catch((err) => {
        console.log(err)
    })

})

new CategoryController(app);
new ToDoController(app)
