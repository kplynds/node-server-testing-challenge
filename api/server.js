const express = require("express");
const cors = require("cors");

const server = express();
const db = require("../data/dbConfig");

const router = require("./router");

server.use(express.json());
server.use(cors());
server.use("/api", router);

server.get("/", (req, res) => {
  console.log("working");
  res.status(200).json("You did it!!!");
});

module.exports = server;