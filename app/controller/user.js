console.log("insde controler");
const User = require('../models/user');
const helper = require('../common/helper')
exports.create = async (req, res) => {
    let { name, email } = req.body;
    let newUser = {
        name,
        email
    }
    let userRecord = new User(newUser)
    try {
        let result = await userRecord.save();
        res.send(helper.respondWithResult(200, { message: "user registered successfully", result }));
    } catch (err) {
        res.send(helper.handleError(err));
    }
};
