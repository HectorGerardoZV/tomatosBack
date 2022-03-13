const express = require("express");
const userRouter = express.Router();

//----Routes----//

//Add a new user in the db
userRouter.post("/users",(req,res)=>{
   
});

//Query All users in the db
userRouter.get("/users",(req,res)=>{

});

//Query a specific user by id
userRouter.get("/users/:id",(req,res)=>{

});

//Update a specific user by id
userRouter.put("/users/:id",(req,res)=>{

});

//Delete a specific user by id
userRouter.delete("/users/:ïd",(req,res)=>{

});



module.exports = userRouter;