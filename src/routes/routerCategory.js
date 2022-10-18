import Express from "express"
import { getCategory, getIdCategory } from '../controller/controllerCategory.js'

const routerCategory = Express.Router();

routerCategory.get("/", getCategory);

routerCategory.get("/:id", getIdCategory);

export { routerCategory };