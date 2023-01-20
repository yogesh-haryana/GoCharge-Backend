require("dotenv").config();
require("./config");
const express = require("express");
const cors = require("cors");
const { json } = require("express");
const router = require("./routes/router");
const app = express();
const port = process.env.PORT||7000;

app.use(json());
app.use(cors());

app.use("/api/allStations", router);

const start = async() => {
  try {
    app.listen(port, () => console.log("Server started on port ",port));
  }
  catch {
    console.log(error);
  }
  };

start();
