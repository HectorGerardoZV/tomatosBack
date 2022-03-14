const express = require("express");
const categoryRouter = express.Router();
//Controller
const categoryController= require("../../controller/categoryController");

//----Routes----//

//Add a new category
categoryRouter.post("/categories",categoryController.addNew);

//Query all categories
categoryRouter.get("/categories",categoryController.getAll);

//Query a specific category by id
categoryRouter.get("/categories/:id",categoryController.getById);

//Update a specific category by id
categoryRouter.put("/categories/:id",categoryController.update);

//Delete a specific category by id
categoryRouter.delete("/categories/:id",categoryController.delete)

module.exports = categoryRouter;