const express = require("express");
const { getAllFood, getDetailFood } = require("../controllers/food.controller");
const router = express.Router();

router.get("/list", getAllFood);
router.get("/detail/:food_id", getDetailFood);

module.exports = router;
