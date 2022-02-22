const express = require("express");
const { tripCreate, tripGet, tripDelete } = require("./trips.controller");
const router = express.Router();

//Routes
router.get("/trips", tripGet);
router.post("/createtrip", tripCreate);
router.delete("/trips/:tripId", tripDelete);

module.exports = router;
