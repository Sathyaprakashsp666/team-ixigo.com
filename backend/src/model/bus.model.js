const mongoose = require("mongoose")

const busSchema = new mongoose.Schema({
    service: {type: String, required: true},
    source: {type: String, required: true},
    destination: {type: String, required: true},
    fare: {type: Number, required: true},
    seats: {type: Number, required: true},
    boarding: {type: String, required: true},
    dropoff: {type: String, required: true},
    departureTiming: {type: String, required: true},
    arrivalTiming: {type: String, required: true},
    busType: {type: String, required: true}
})

const Bus = mongoose.model("bus-service-collection", busSchema)

const insertDocument = async() => {
    try {
        const bus1 = new Bus({
            service: "HRTC",
            source: "Delhi",
            destination: "Simla",
            fare: 500,
            seats: 30,
            boarding: "ISBT",
            dropoff: "ISBT",
            departureTiming: "22:00",
            arrivalTiming: "08:00",
            busType: "AC"
        })
        const bus2 = new Bus({
            service: "HRTC",
            source: "Delhi",
            destination: "Bhopal",
            fare: 500,
            seats: 30,
            boarding: "ISBT",
            dropoff: "ISBT",
            departureTiming: "22:00",
            arrivalTiming: "08:00",
            busType: "AC"
        })
        const res = await Bus.insertMany([bus1, bus2])
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}
module.exports = insertDocument

