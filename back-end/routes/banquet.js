//Importing express from package.json
const express = require("express");
const router = express.Router();

//Importing functions from banquet.js.
const { getBanquet, createBanquet } = require("../controllers/banquet");

//Creating HTTP request methods with express router.
router.route("/api/createBanquet").post(createBanquet);

router.route("/api/getBanquet").get(getBanquet);

//Exporting router.
module.exports = router;
