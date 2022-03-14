const express = require("express");
const positionRouter = express.Router();

//Controller
const positionController = require("../../controller/positionController");

//Add a new promotion in the db.
positionRouter.post("/positions",positionController.addNew);

//Query All positions in the db.
positionRouter.get("/positions",positionController.getAll);

//Query a specific promotion by id
positionRouter.get("/positions/:id",positionController.getById);

//Update a specific promotion by id.
positionRouter.put("/positions/:id",positionController.update);

//Delete a specific promotion by id.
positionRouter.delete("/positions/:ïd",positionController.delete);

module.exports = positionRouter;