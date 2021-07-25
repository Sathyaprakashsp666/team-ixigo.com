const express = require("express");
const router = express.Router();
const Route = require("../models/route.model");

exports.getRoutes = async (req, res) => {
  const from = req.params.from;
  const to = req.params.to;
  const bus = await Route.find({
    $and: [{ sourceStationName: from }, { destinationStationName: to }],
  })
    .populate("buses")
    .lean()
    .exec();
  res.status(200).json(bus[0]);
};

exports.getCurrentBus = async(req,res) => {
  const id = req.params.id
  const bus = await Route.findById(id)
  res.status(200).json(bus)
}
