const express = require("express");
const router = express.Router();

const routeController = require('../controller/route.controller')

router.get("/buses/search/:from/:to", routeController.getRoutes);

module.exports = router;
