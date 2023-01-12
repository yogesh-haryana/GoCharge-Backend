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

module.exports = mongoose.model("evstations", stationsSchema);

