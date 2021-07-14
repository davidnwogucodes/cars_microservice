const Cars = require("../models/cars.models");

module.exports = {
  createCars: async (req, res) => {
    try {
      const { carId, carName, carModel, carColour } = req.body;
      if (!carId || !carName || !carModel || !carColour) {
        res.json({ status: false, message: "please input car credentials" });
      }
      const cars = new Cars({
        carId,
        carName,
        carModel,
        carColour,
      });
      const isSaved = await cars.save();
      if (!isSaved) {
        return res.json({
          status: false,
          message: "unable to save users",
        });
      }
      return res.json({ message: "saved sucessfully" });
    } catch (error) {
      res.json({
        status: false,
        message: error.message,
      });
    }
  },

  getCars: async (req, res) => {
    try {
      const cars = await Cars.find({});
      if (!cars) {
        return res.json({ message: "unable to get cars" });
      }
      res.json({ cars });
    } catch (error) {
      res.json({
        status: false,
        message: error.message,
      });
    }
  },

  getCar: async (req, res) => {
    const carId = req.params.carId;
    try {
      const car = await Cars.findOne({ _id: carId });
      if (!car) {
        res.json({ message: "unable to car" });
      }
      res.json({ car });
    } catch (error) {
      res.json({
        status: false,
        message: error.message,
      });
    }
  },
};
