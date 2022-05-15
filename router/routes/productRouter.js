const express = require("express");
const productRouter = express.Router();
//Controller
const productController = require("../../controller/productController");

//----Routes----//
//Add a new product in the db.
productRouter.post("/products",productController.addNew);

//Query All products in the db.
productRouter.get("/products",productController.getAll);

//Query a specific product by id
productRouter.get("/products/:id",productController.getById);

//Query a specific product by id
productRouter.get("/products/category/:category",productController.getByCategory);

//Update a specific product by id.
productRouter.put("/products/:id",productController.update);

//Delete a specific product by id.
productRouter.delete("/products/:id",productController.delete);

module.exports = productRouter;



