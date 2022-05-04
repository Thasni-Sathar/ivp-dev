"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionService = void 0;
const questions_1 = require("../models/questions");
class QuestionService {
    static get QuestionList() {
        /* When only selected fields required go for the below code */
        //return ['id','role_id'];
        return ({});
    }
    /* To get the list of all question*/
    getAllQuestions() {
        return questions_1.Question.findAll({});
    }
    createQuestion(question) {
        var newQuestion = new questions_1.Question(question);
        return newQuestion.save();
    }
    findByQuestionId(id) {
        return questions_1.Question.findByPk(id);
    }
    updateQuestion(event, id) {
        var updateQuestion = {
            question: event.question,
            status: event.status,
        };
        return questions_1.Question.update(updateQuestion, { where: { id: id } });
    }
}
exports.QuestionService = QuestionService;
