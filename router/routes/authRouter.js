const express = require("express");
const authRouter = express.Router();
//Controller
const authController = require("../../controller/authController");
//Funciones
const {loginUser, verifyUser} = authController;

authRouter.post("/login",loginUser);
authRouter.get("/login", verifyUser);

module.exports = authRouter;