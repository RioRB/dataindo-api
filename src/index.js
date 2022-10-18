// In src/index.js 
import Express from "express"
import { routerCategory } from './routes/routerCategory.js'
import { routerSubCategory } from "./routes/routerSubcategory.js";
import { routerContents } from "./routes/routerContents.js";

const app = Express(); 
const PORT = process.env.PORT || 3000;

app.use("/categories", routerCategory)

app.use("/subcategories", routerSubCategory)

app.use("/contents", routerContents)

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});