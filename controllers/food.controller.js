const { Food } = require("../db/models");
const createError = require("http-errors");

const getAllFood = async (req, res, next) => {
    try {
        const data = await Food.findAll({ attributes: { exclude: ["createdAt", "updatedAt"] } });
        res.send({ info: { status: 200, message: "OK" }, data: data });
    } catch (error) {
        next(createError(500));
    }
};

const getDetailFood = async (req, res, next) => {
    const { food_id } = req.params;

    try {
        const data = await Food.findOne({
            where: { food_id: food_id },
            attributes: { exclude: ["createdAt", "updatedAt"] },
        });
        res.send({ info: { status: 200, message: "OK" }, data: data });
    } catch (error) {
        next(createError(500));
    }
};

module.exports = { getAllFood, getDetailFood };
