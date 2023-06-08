"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert("foodType", [
            {
                food_type_id: 1,
                type_name: "Makanan",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                food_type_id: 2,
                type_name: "Minuman",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                food_type_id: 3,
                type_name: "Lain - lain",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete("foodType", null, {});
    },
};
