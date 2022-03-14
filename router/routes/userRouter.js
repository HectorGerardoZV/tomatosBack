const express = require("express");
const userRouter = express.Router();

//Controller
const userController = require("../../controller/userController");

//----Routes----//

//Add a new user in the db
userRouter.post("/users",userController.addNew);

//Query All users in the db
userRouter.get("/users",userController.getAll);

//Query a specific user by id
userRouter.get("/users/:id",userController.getById);

//Update a specific user by id
userRouter.put("/users/:id",userController.update);

//Delete a specific user by id
userRouter.delete("/users/:ïd",userController.delete);



module.exports = userRouter;