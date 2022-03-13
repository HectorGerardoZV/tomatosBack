const express = require("express");
const orderRouter = express.Router();

//Add a new order in the db.
orderRouter.post("/orders",(req,res)=>{

});

//Query All orders in the db.
orderRouter.get("/orders",(req,res)=>{

});

//Query a specific order by id
orderRouter.get("/orders/:id",(req,res)=>{

});

//Update a specific order by id.
orderRouter.put("/orders/:id",(req,res)=>{

});

//Delete a specific order by id.
orderRouter.delete("/orders/:ïd",(req,res)=>{

});



module.exports = orderRouter;


