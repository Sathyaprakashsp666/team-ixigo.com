const { Schema, model } = require("mongoose");
const Bus = require("./bus.model");

const routeSchema = new Schema({
  sourceStationName: { type: String, required: true },
  destinationStationName: { type: String, required: true },
  boardingPoints: [{ type: String, required: true }],
  droppingPoint: [{ type: String, required: true }],
  buses: [
    {
      type: Schema.Types.ObjectId,
      ref: 'bus-collection',
    },
  ],
});

module.exports = model("route", routeSchema);
