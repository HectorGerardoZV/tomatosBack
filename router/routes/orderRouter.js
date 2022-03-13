const express = require("express");
const orderRouter = express.Router();

//Controllers
const orderController = require("../../controller/orderController");


//Add a new order in the db.
orderRouter.post("/orders",orderController.addNew);

//Query All orders in the db.
orderRouter.get("/orders",orderController.getAll);

//Query a specific order by id
orderRouter.get("/orders/:id",orderController.getById);

//Update a specific order by id.
orderRouter.put("/orders/:id",orderController.update);

//Delete a specific order by id.
orderRouter.delete("/orders/:ïd",orderController.delete);



module.exports = orderRouter;


