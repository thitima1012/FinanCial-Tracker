const financialController = require("../controllers/financial.controller");
const express = require("express");
const router = express.Router();

//create a new financial
router.post("/", financialController.create);

//Retrieve all financial records
router.get("/", financialController.findAll);

//Retrieve a financial record with id
router.get("/:id", financialController.findOne);

//Retrieve all financial records By UserId
router.get("/user/:userId", financialController.findAllByUserId);

//Update a financial record with id
router.put("/:id", financialController.update);

//Delete a financial record with id
router.delete("/:id", financialController.delete);


module.exports = router;