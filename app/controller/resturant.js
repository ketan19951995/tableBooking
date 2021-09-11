const { Resturant, ResturantTable, ResturantTableBook } = require('../models/resturant');
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
    let { resturantId, status } = req.body;
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



exports.bookTable = async (req, res) => {
    let { resturantId, tableId, status, userId } = req.body;
    let newResturantTable = {
        resturantId,
        tableId,
        status,
        userId
    }
    let resturantTableBookRecord = new ResturantTableBook(newResturantTable)
    try {
        let result = await resturantTableBookRecord.save();

        // update the record in table collection  ,set the status to either booked or reserved
        await ResturantTable.findOneAndUpdate({ _id: tableId }, { status: status });
        res.send(helper.respondWithResult(200, { message: "table booked  in resturant successfully", result }));
    } catch (err) {
        res.send(helper.handleError(err));
    }
};



exports.getAllTables = async (req, res) => {
    const {status} = req.query;
    try {
        // fetch all the tables with particular status
        let result  = await ResturantTable.find({ status: status });
        res.send(helper.respondWithResult(200, { message: "List of all tables", result }));
    } catch (err) {
        res.send(helper.handleError(err));
    }
};

