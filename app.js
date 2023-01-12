require("dotenv").config();
const evStations = require("./model");
require("./config");
const express = require("express");
const cors = require("cors");
const { json } = require("express");
const routes = require("./routes/router");

const app = express();
const port = process.env.PORT||7000;

app.use(json());
app.use(cors());

app.use("/api/allStations", routes);

const start = async() => {
  try {
    app.listen(port, () => console.log("Server started on port 7000"));
  }
  catch {
    console.log(error);
  }
  };

start();
