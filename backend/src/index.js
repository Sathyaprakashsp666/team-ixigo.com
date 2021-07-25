const express = require("express");
const cors = require("cors")
const app = express();
app.use(express.json());
app.use(cors())
const busRoutes = require("./routes/bus.routes");
const authRoutes = require("./routes/auth.routes");

app.use("/buses",busRoutes);
app.use("/auth",authRoutes);

app.use((error, req, res, next)=>{
    console.log(error)
    const status=error.statusCode || 500,
    message= error.message,
    data=error.data
    res.status(status).json({message,data})
})

module.exports = app;
