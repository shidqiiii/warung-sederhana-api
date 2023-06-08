"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("food", {
            food_id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING,
            },
            name: {
                type: Sequelize.STRING,
            },
            description: {
                type: Sequelize.STRING,
            },
            price: {
                type: Sequelize.INTEGER,
            },
            photo: {
                type: Sequelize.INTEGER,
            },
            food_type_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: "foodType",
                    key: "food_type_id",
                },
            },
            is_soldout: {
                type: Sequelize.BOOLEAN,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("food");
    },
};
