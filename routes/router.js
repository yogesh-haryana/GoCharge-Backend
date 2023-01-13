const express = require("express");
const router = express.Router();
const { getAllStataionsData, getFilteredStationsData, postAllStations, postSearchQuery, getSearchHistory } = require("../controllers/controllers");

router.route("/history/:page").get(getSearchHistory);
router.route("/").get(getAllStataionsData);
router.route("/").post(postAllStations)
router.route("/:inputValue").get(getFilteredStationsData);
router.route("/:inputValue").post(postSearchQuery);

module.exports = router;