const { evStations, searchHistory } = require("../model");

const getSearchHistory = async (req, resp) => {
    const page = Number(req.query.page);
    const entries = Number(req.query.entries);
    console.log(page);
    const limit = entries || 5;
    const skip = (page - 1) * limit;
    const { searchQuery, atDate } = req.query;

    if (searchQuery && atDate) {
        let data = await searchHistory.find({ searchQuery: searchQuery, atDate: atDate }).limit(limit).skip(skip);
        resp.status(200).json(data);
    }
    else if (searchQuery) {
        let data = await searchHistory.find({ searchQuery: searchQuery }).limit(limit).skip(skip);
        resp.status(200).json(data);
    } else if (atDate) {
        let data = await searchHistory.find({ atDate: atDate }).limit(limit).skip(skip);
        resp.status(200).json(data);
    } else {
        let data = await searchHistory.find({}).limit(limit).skip(skip);
        resp.status(200).json(data);
    }
}

const getAllStataionsData = async (_, resp) => {
    const data = await evStations.find({});
    resp.status(200).json(data);
}

const getFilteredStationsData = async (req, resp) => {
    const data = await evStations.find().sort("ratesPerHour");
    const filteredData = data.filter((item) => {
        for (let i = 0; i < item.connectorTypes.length; i++) {
            if (req.params.inputValue === item.connectorTypes[i]) {
                return item;
            }
        }
    });
    resp.status(200).json(filteredData);
}

const postAllStations = async (req, resp) => {
    let data = new evStations(req.body);
    await data.save();
    resp.send(data);
}

const postSearchQuery = async (req, resp) => {
    const query = req.body.searchQuery.trim();
    const allConnectorTypes = ["5-pins", "7-pins", "12-pins"];
    if (allConnectorTypes.includes(query)) {
        let data = new searchHistory({ searchQuery: query });
        await data.save();
        resp.send(data);
    }
};

module.exports = { getAllStataionsData, getFilteredStationsData, postAllStations, postSearchQuery, getSearchHistory }
