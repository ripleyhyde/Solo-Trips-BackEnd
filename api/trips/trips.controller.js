const { findById, findByIdAndDelete } = require("../../models/Trip");
const Trip = require("../../models/Trip");

//Create Trip
exports.tripCreate = async (req, res, next) => {
  try {
    const newTrip = await Trip.create(req.body);
    return res.status(201).json(newTrip);
  } catch (error) {
    next(error);
  }
};

//Get Trip List
exports.tripGet = async (req, res) => {
  try {
    const trips = await Trip.find();
    return res.json(trips);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Delete Trip*
exports.tripDelete = async (req, res) => {
  const tripId = req.params.tripId;
  console.log(req.params.tripId);

  try {
    const foundTrip = await Trip.findByIdAndDelete(tripId);
    if (foundTrip) {
      findByIdAndDelete(foundTrip);
      res.status(204).end();
    }
  } catch (error) {
    res.status(404).json({ message: "Trip not found" });
  }
};
