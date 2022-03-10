const express = require("express");
const userRouter = express.Router()

userRouter.get("/user",(req,res)=>{
    const number = Math.random()*100
    res.json({value: number});
})

userRouter.post("/user",(req,res)=>{
    console.log(req.body);
    res.json(req.body)
})


//http://locahost:1000/user/42342 ejemplo de get("/user/url/:id")
module.exports = userRouter