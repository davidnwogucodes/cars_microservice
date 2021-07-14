const mongoose = require("mongoose");
const CarsSchema = new mongoose.Schema({
  carId: Number,
  carName: String,
  carModel: String,
  carColour: String,
});

const Cars = mongoose.model("cars", CarsSchema);
module.exports = Cars;
