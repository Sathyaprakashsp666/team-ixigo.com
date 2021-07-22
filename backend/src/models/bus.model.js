const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    service: { type: Boolean, required: true },

    providerId: { type: Number, required: true },
    operatorId: { type: Number, required: true },
    serviceId: { type: String, required: true },
    serviceName: { type: String, required: true },
    travelerAgentName: { type: String, required: true },
    busTypeName: { type: String, required: true },
    startTime: { type: String, required: true },
    arrivalTime: { type: String, required: true },
    sourceStationId: { type: String, required: true },
    destinationStationId: { type: String, required: true },
    sourceStationName: { type: String, required: true },
    destinationStationName: { type: String, required: true },
    seatFare: { type: Number, required: true },
    providedSeatFare: { type: Number, required: true },
    availableSeats: { type: Number, required: true },
    burnAmount: { type: Number, required: true },
    earnAmount: { type: Number, required: true },
    discount: { type: Number, required: true },
    journeyDate: { type: String, required: true },
    busStartDate: { type: String, required: true },
    boardingPoints: { type: String, required: true },
    droppingPoint: { type: String, required: true },
    isAcSeat: { type: Boolean, required: true },
    boardDropFirst: { type: Number, required: true },
    singleLady: { type: Number, required: true },
    cumulativeRating: { type: Number, required: true },
    ratingCount: { type: Number, required: true },
    travelTime: { type: String, required: true },
    AC: { type: Boolean, required: true },
    NONAC: { type: Boolean, required: true },
    VOLVO: { type: Boolean, required: true },
    Sleeper: { type: Boolean, required: true },
    singleseating: { type: Boolean, required: true },
  },
  {
    versionKey: false,
    timeStamps: true,
  }
);

module.exports = model("bus-collections", userSchema);