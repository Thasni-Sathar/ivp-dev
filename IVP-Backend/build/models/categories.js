"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class Category extends sequelize_1.Model {
}
exports.Category = Category;
Category.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    categoryName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: sequelize_1.DataTypes.STRING,
        values: ['active', 'in active'],
        // validate: {
        //   customValidator: (value:string) => {
        //       const enums = ['active', 'inactive']
        //       if (!enums.includes(value)) {
        //           throw new Error('not a valid option')
        //       }
        //   }
        // },
        allowNull: false
    },
}, {
    sequelize: database_1.default,
    modelName: 'categories',
    underscored: true,
    timestamps: true,
});
