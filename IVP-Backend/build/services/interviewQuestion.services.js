"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterviewQuestionService = void 0;
const interviewQuestions_1 = require("../models/interviewQuestions");
// const DB = require('../models/index');
const { QueryTypes } = require('sequelize');
const sequelize = require('../config/database');
class InterviewQuestionService {
    createInterviewQuestions(interviewQuestions) {
        var newInterviewQuestions = new interviewQuestions_1.InterviewQuestions(interviewQuestions);
        return newInterviewQuestions.save();
    }
}
exports.InterviewQuestionService = InterviewQuestionService;
