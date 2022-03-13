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
categoryRouter.get("/categories/:id",(req,res)=>{

});

//Update a specific category by id
categoryRouter.put("/categories/:id",(req,res)=>{

});

//Delete a specific category by id
categoryRouter.delete("/categories/:id",(req,res)=>{

})





module.exports = categoryRouter;