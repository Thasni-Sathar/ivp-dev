"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterviewService = void 0;
const interviews_1 = require("../models/interviews");
class InterviewService {
    createInterview(interview) {
        var newInterview = new interviews_1.Interview(interview);
        return newInterview.save();
    }
    findByTitle(title) {
        return interviews_1.Interview.findOne({
            where: {
                interviewTitle: title
            }
        });
    }
    updateInterview(interview) {
        const hi = "hi";
        return ({
            hi
        });
    }
}
exports.InterviewService = InterviewService;
