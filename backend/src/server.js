const express = require("express")
const app = require("./index");

const connect = require("./config/db");

const start = async () => {
  await connect();
  app.listen("2244", () => {
    console.log("Listening to port 2244");
  });
};

start();
