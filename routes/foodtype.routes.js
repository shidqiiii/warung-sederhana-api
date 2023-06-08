const express = require("express");
const { getFoodType } = require("../controllers/foodtype.controller");
const router = express.Router();

router.get("/", getFoodType);

module.exports = router;
