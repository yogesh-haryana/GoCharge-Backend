const express = require("express");
const router = express.Router();
const { getAllStataionsData, getFilteredStationsData, postAllStations, postSearchQuery } = require("../controllers/controllers");

router.route("/").get(getAllStataionsData);
router.route("/").post(postAllStations)
router.route("/:inputValue").get(getFilteredStationsData);
router.route("/:inputValue").post(postSearchQuery);

module.exports = router;