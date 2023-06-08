"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class FoodType extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            FoodType.hasMany(models.Food, {
                foreignKey: "food_type_id",
                sourceKey: "food_type_id",
            });
        }
    }
    FoodType.init(
        {
            food_type_id: { allowNull: false, primaryKey: true, type: DataTypes.INTEGER },
            type_name: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "FoodType",
            tableName: "foodType",
            freezeTableName: true,
        }
    );
    return FoodType;
};
