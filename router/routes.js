const express = require("express");

const routes = express.Router();

routes.use(require("./routes/userRouter"));
routes.use(require("./routes/categoryRouter"));
routes.use(require("./routes/productRouter"));
routes.use(require("./routes/promotionRouter"));
routes.use(require("./routes/orderRouter"));
routes.use(require("./routes/saleRouter"));
routes.use(require("./routes/authRouter"));


module.exports = routes;

 