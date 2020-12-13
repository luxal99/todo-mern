import {ToDo} from "../models/ToDo";
import {Category} from "../models/Category";

require("dotenv").config();

export const PORT = process.env.PORT;
export const CATEGORY_ROUTE = "/category";
export const ENTITIES = [ToDo, Category];
export const TO_DO_ROUTE = "/todo";
