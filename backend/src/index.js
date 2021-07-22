const express = require("express");
const app = express();
app.use(express.json());

const busRoutes = require("./routes/bus.routes");

app.use(busRoutes);

module.exports = app;
