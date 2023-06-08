"use strict";
const { v4: uuidv4 } = require("uuid");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert("food", [
            {
                food_id: uuidv4(),
                name: "Nasi Orak-arik Telur",
                description: "nasi, telur orak arik, orak arik tempe, sambal",
                price: 12000,
                photo: null,
                food_type_id: 1,
                is_soldout: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                food_id: uuidv4(),
                name: "Es Teh",
                description: null,
                price: 4000,
                photo: null,
                food_type_id: 2,
                is_soldout: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                food_id: uuidv4(),
                name: "Pancong Oreo",
                description: "Kue pancong disajikan dengan oreo dan susu",
                price: 11000,
                photo: null,
                food_type_id: 3,
                is_soldout: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete("food", null, {});
    },
};
