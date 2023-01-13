const mongoose = require("mongoose");

const stationsSchema = new mongoose.Schema({
    stationName: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    location: {
        lat: {
            type: Number,
            required:  [true, "latitude must be provided"],
        },
        lang: {
            type: Number,
            required: [true, "longitude must be provided"],
        },
    },
    ratesPerHour: {
        type: Number,
        required: true,
    },
    connectorTypes: {
        type: Array,
        required: true,
    },
});

const dateNow = new Date();
const year = dateNow.getFullYear();
const month = Number(dateNow.getMonth()+1);
const day = dateNow.getDate();
const finalDate = `${day}-${month}-${year}`;

const historySchema = mongoose.Schema({
    searchQuery: {
        type: String,
        required: true,
    },
    atDate: {
        type: String,
        default: finalDate,
    }
})

const evStations = mongoose.model("evstations", stationsSchema);
const searchHistory = mongoose.model("history", historySchema);

module.exports = {evStations, searchHistory}


