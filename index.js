const express = require("express");
const mongoose = require("mongoose");
const indexHandelar = require("./handelar/indexHandelar");
const createMovies = require("./handelar/createMovies");
const getMovies = require("./handelar/getMovies");
const path = require("path");
const cors = require("cors");

require("dotenv").config();
// model import

require("./movies.model");

const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" || "https://agexdigital.netlify.app/" }));
const mongo_connect = process.env.mongo_connect;

mongoose
  .connect(mongo_connect, {})
  .then(() => {
    console.log("mongoose connected");
  })
  .catch((err) => {
    console.log("connection failed");
  });

app.get("/", indexHandelar);

//more routes
app.post("/movies", createMovies);

app.get("/movies", getMovies);

app.use(express.static(path.join(__dirname, "./agency_web/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./agency_web/build/index.html"));
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log("server started");
});
