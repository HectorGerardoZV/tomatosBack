const express = require("express");

const routes = express.Router();

routes.use(require("./routes/userRouter"))

module.exports = routes

 