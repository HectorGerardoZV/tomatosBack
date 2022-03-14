const express = require("express");

const routes = express.Router();

//Users
routes.use(require("./routes/userRouter"));
//Categories
routes.use(require("./routes/categoryRouter"));
//Products
routes.use(require("./routes/productRouter"));
//Promotions
routes.use(require("./routes/promotionRouter"));
//Orders
routes.use(require("./routes/orderRouter"));
//Positions
routes.use(require("./routes/positionRouter"));
//Sales
routes.use(require("./routes/saleRouter"));
//Auth
routes.use(require("./routes/authRouter"));


module.exports = routes;

 