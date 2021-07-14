const express = require("express");
const router = express.Router();

const { createCars, getCar, getCars } = require("../controller/car");
router.post("/createCars", createCars);
router.get("/getCars", getCars);
router.get("/getCar/:carId", getCar);

module.exports = router;
