import Express from "express"
import { getContents, getIdContents } from "../controller/controllerContents.js"

const routerContents = Express.Router();

routerContents.get("/", getContents);

routerContents.get("/:id", getIdContents);

export { routerContents };