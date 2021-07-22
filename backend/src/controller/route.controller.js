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
  res.status(200).json({ data: bus });
};
