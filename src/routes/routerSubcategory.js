import Express from "express"
import { getSubCategory, getSubIdCategory } from '../controller/controllerSubCategory.js'

const routerSubCategory = Express.Router();

routerSubCategory.get("/", getSubCategory);

routerSubCategory.get("/:id", getSubIdCategory);

export { routerSubCategory };