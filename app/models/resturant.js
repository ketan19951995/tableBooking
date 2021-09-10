const mongoose = require('mongoose');

const resturantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
    },
    totalTablesCount: {
        type: String,
    },
}, { versionKey: false })

const Resturant = mongoose.model("Resturant", resturantSchema);



const resturantTablesSchema = new mongoose.Schema({
    resturantId: {
        type: mongoose.Schema.Types.ObjectId
    },
    status: {
        type: String,
    }


}, { versionKey: false })

const ResturantTable = mongoose.model("ResturantTable", resturantTablesSchema);

module.exports = {
    Resturant,
    ResturantTable
}