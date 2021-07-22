const { Schema, model } = require("mongoose");

const bookingSchema = new Schema({
  sourceStationName: { type: String, required: true },
  destinationStationName: { type: String, required: true },
  buses: {
    type: Schema.Types.ObjectId,
    ref: "bus-collections",
  },
});

module.exports = model("route", routeSchema);
