const { Schema, model } = require("mongoose");

const busSchema = new Schema(
  {
    serviceName: { type: String, required: true },
    travelerAgentName: { type: String, required: true },
    busTypeName: { type: String, required: true },
    startTime: { type: String, required: true },
    arrivalTime: { type: String, required: true },
    seatFare: { type: Number, required: true },
    providedSeatFare: { type: Number, required: true },
    availableSeats: { type: Number, required: true },
    discount: { type: Number, required: true },
    travelTime: { type: String, required: true },
    AC: { type: Boolean, required: true },
    NONAC: { type: Boolean, required: true },
    VOLVO: { type: Boolean, required: true },
    Sleeper: { type: Boolean, required: true },
    singleseating: { type: Boolean, required: true },
    seatsL:{type:[[Number]],default:[[0,0,0,0],[0,0,0,0],[1,1,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],]},
    seatsR:{type:[[Number]],default:[[0,0,0,0],[0,0,0,0],[1,1,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],]}
  },
  {
    versionKey: false,
    timeStamps: true,
  }
);

module.exports = model("bus-collection", busSchema);
