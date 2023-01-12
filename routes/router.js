const express = require("express");
const router = express.Router();
const { getAllStataionsData, getFilteredStationsData, postAllStations } = require("../controllers/controllers");

router.route("/").get(getAllStataionsData);
router.route("/").post(postAllStations)
router.route("/:inputValue").get(getFilteredStationsData);

module.exports = router;