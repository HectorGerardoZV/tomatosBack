const express = require("express");
const productRouter = express.Router();

//Add a new product in the db.
productRouter.post("/products",(req,res)=>{

});

//Query All products in the db.
productRouter.get("/products",(req,res)=>{

});

//Query a specific product by id
productRouter.get("/products/:id",(req,res)=>{

});

//Update a specific product by id.
productRouter.put("/products/:id",(req,res)=>{

});

//Delete a specific product by id.
productRouter.delete("/products/:ïd",(req,res)=>{

});



module.exports = productRouter;



