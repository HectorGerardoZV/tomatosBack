const express = require("express");

const routes = express.Router();

routes.use(require("./routes/userRouter"));
routes.use(require("./routes/categoryRouter"));

module.exports = routes

 