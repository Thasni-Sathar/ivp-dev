"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterviewCandidates = void 0;
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class InterviewCandidates extends sequelize_1.Model {
}
exports.InterviewCandidates = InterviewCandidates;
InterviewCandidates.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    CandidateId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    InterviewId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    interviewDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true
    },
    interviewTime: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true
    },
    RequestLink: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    RequestLinkStatus: {
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
    modelName: 'interview_candidates',
    underscored: true,
    timestamps: true,
});
