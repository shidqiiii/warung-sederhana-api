const { FoodType } = require("../db/models");
const createError = require("http-errors");

const getFoodType = async (req, res, next) => {
    try {
        const data = await FoodType.findAll({ attributes: { exclude: ["createdAt", "updatedAt"] } });
        res.send({ info: { status: 200, message: "OK" }, data: data });
    } catch (error) {
        return next(createError(500));
    }
};

module.exports = { getFoodType };
