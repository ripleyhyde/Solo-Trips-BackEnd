const Trip = require("../../models/Trip");

exports.tripCreate = async (req, res, next) => {
  try {
    const newTrip = await Trip.create(req.body);
    return res.status(201).json(newTrip);
  } catch (error) {
    next(error);
  }
};
