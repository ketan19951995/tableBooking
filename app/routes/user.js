console.log("inside  user routes files");
const express = require("express");
const router = express.Router()
const userController = require('../controller/user');

// Create a new user
router.post('/', userController.create);

module.exports = router