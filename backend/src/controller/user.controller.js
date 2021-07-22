const express = require("express");
const router = express.Router();
const User = require("../models/bus.model");

//GET all buses

router.get("/buses", async (req, res) => {
  const user = await User.find({}).lean().exec();
  res.status(200).json({ data: user });
});

//Get buses by location

router.get("/buses/location", async (req, res) => {
  const from = req.query.from;
  const to = req.query.to;
  const user = await User.find({$and: [{sourceStationName:from}, {destinationStationName: to}]})
  res.status(200).json({ data: user });
});

//AC
router.get("/buses/location/ac", async (req, res) => {
  const from = req.query.from;
  const to = req.query.to;
  const user = await User.find({$and: [{sourceStationName:from}, {destinationStationName: to}, {AC: true}]})
  res.status(200).json({ data: user });
});


module.exports = router;
