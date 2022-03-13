const express = require("express");
const categoryRouter = express.Router();

//----Routes----//

//Add a new category
categoryRouter.post("/categories",(req,res)=>{

});

//Query all categories
categoryRouter.get("/categories",(req,res)=>{

});

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