const express = require("express")
const app = express()
const connect = require("./config/db.js")
const insertDocument = require("./model/bus.model.js")

// insertDocument()

app.listen(3030, async() => {
    await connect()
    console.log("listening on port 3030")
})