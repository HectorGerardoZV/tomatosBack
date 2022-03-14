const express = require("express");
const promotionRouter = express.Router();

//Controller


//Add a new promotion in the db.
promotionRouter.post("/promotions",(req,res)=>{

});

//Query All promotions in the db.
promotionRouter.get("/promotions",(req,res)=>{

});

//Query a specific promotion by id
promotionRouter.get("/promotions/:id",(req,res)=>{

});

//Update a specific promotion by id.
promotionRouter.put("/promotions/:id",(req,res)=>{

});

//Delete a specific promotion by id.
promotionRouter.delete("/promotions/:ïd",(req,res)=>{

});



module.exports = promotionRouter;


