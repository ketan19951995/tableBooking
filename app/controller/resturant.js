const { Resturant, ResturantTable } = require('../models/resturant');
const helper = require('../common/helper')
exports.createResturant = async (req, res) => {
    let { name, address, totalTablesCount } = req.body;
    let newResturant = {
        name,
        address,
        totalTablesCount
    }
    let resturantRecord = new Resturant(newResturant)
    try {
        let result = await resturantRecord.save();
        res.send(helper.respondWithResult(200, { message: "resturant added successfully", result }));
    } catch (err) {
        res.send(helper.handleError(err));
    }
};

exports.createResturantTable = async (req, res) => {
    let { resturantId, status} = req.body;
    let newResturantTable = {
        resturantId,
        status
    }
    let resturantTableRecord = new ResturantTable(newResturantTable)
    try {
        let result = await resturantTableRecord.save();
        res.send(helper.respondWithResult(200, { message: "table added in resturant successfully", result }));
    } catch (err) {
        res.send(helper.handleError(err));
    }
};






