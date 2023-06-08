"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Food extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Food.belongsTo(models.FoodType, {
                foreignKey: "food_type_id",
                targetKey: "food_type_id",
            });
        }
    }
    Food.init(
        {
            food_id: { allowNull: false, primaryKey: true, type: DataTypes.STRING },
            name: DataTypes.STRING,
            description: DataTypes.STRING,
            price: DataTypes.INTEGER,
            photo: DataTypes.INTEGER,
            food_type_id: {
                type: DataTypes.INTEGER,
                references: {
                    model: "foodType",
                    key: "food_type_id",
                },
            },
            is_soldout: DataTypes.BOOLEAN,
        },
        {
            sequelize,
            modelName: "Food",
            tableName: "food",
            freezeTableName: true,
        }
    );
    return Food;
};
