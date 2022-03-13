const express = require("express");
const saleRouter = express.Router();

//Add a new sale
saleRouter.post("/sales",(req,res)=>{

});
//Query all sales
saleRouter.get("/sales",(req,res)=>{

});
//Query a specific sale by id
saleRouter.get("/sales/:id",(req,res)=>{

});
//Query all sales in a  period
saleRouter.get("/sales/:period",(req,res)=>{

});




module.exports = saleRouter;