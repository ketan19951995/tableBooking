console.log("inside  resturant routes files");
const express = require("express");
const router = express.Router()
const resturantController = require('../controller/resturant');

// Create a new user
router.post('/', resturantController.createResturant);
router.post('/table', resturantController.createResturantTable);
router.post('/booktable/', resturantController.bookTable);

module.exports = router