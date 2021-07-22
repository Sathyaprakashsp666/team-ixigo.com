const express = require("express");
const cors = require("cors")
const app = express();
app.use(express.json());
app.use(cors())
const busRoutes = require("./routes/bus.routes");

app.use(busRoutes);

module.exports = app;
