const express = require("express");
const app = require("./index");

const connect = require("./config/db");

const start = async () => {
  await connect();
  app.listen("5000", () => {
    console.log("Listening to port 5000");
  });
};

start();
