"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterviewController = void 0;
const interview_services_1 = require("../services/interview.services");
const interviewQuestion_services_1 = require("../services/interviewQuestion.services");
const questions_service_1 = require("../services/questions.service");
const database_1 = __importDefault(require("../config/database"));
const { QueryTypes } = require('sequelize');
const interviewServices = new interview_services_1.InterviewService();
const interviewQuestionService = new interviewQuestion_services_1.InterviewQuestionService();
const questionService = new questions_service_1.QuestionService();
const sequelize = require('../config/database');
class InterviewController {
    addInterview(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var interview = req.body;
            var questions = interview.question_id;
            interviewServices.createInterview(interview)
                .then((data) => {
                var interview_id = data.id;
                for (var i = 0; i < questions.length; i++) {
                    var question_id = interview.question_id[i];
                    let interviewQuestions = {
                        interviewId: interview_id,
                        questionId: question_id
                    };
                    interviewQuestionService.createInterviewQuestions(interviewQuestions);
                }
                res.send(data);
            })
                .catch((error) => {
                res.send(error);
            });
            // .then((question_id:any)=>{
            //     console.log(interview.question_id)
            //     try{
            //         interview.setinterview_questions(question_id)
            //         res.send("success")
            //     }
            //     catch(error:any){
            //         console.log("error occured")
            //         res.send(error);
            //     }
            // })
        });
    }
    getQuestionsByInterviewId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let interviewTitle = req.params.interviewtitle;
            interviewServices.findByTitle(interviewTitle)
                .then((data) => {
                var interview = data;
                var interview_id = interview.id;
                // interviewQuestionService.findQuestionsByInterviewId(interview_id)
                //  .then(()=>{
                // questionService.findByQuestionId(data.question_id)
                // .then((data:any)=>{
                //     console.log(data)
                //     res.send(data)
                // })
                // .catch((error:any)=>{
                //     res.send(error)
                //  })
                // res.send(data) 
                // console.log("hi")
                //)}
                return database_1.default.query(`SELECT interviews.interview_title,interview_questions.question_id,interview_questions.interview_id,questions.question FROM interview_questions INNER JOIN questions ON interview_questions.question_id = questions.id INNER JOIN interviews ON interview_questions.interview_id = interviews.id WHERE interview_questions.interview_id = ${interview_id}`, { type: QueryTypes.SELECT });
            })
                .then((data) => {
                console.log(data);
                res.send(data);
            })
                .catch((error) => {
                res.send("error");
            })
                // .then((data:any)=>{
                //     var result;
                //     var metadata;
                //     [result,metadata] = data;
                //     console.log(result);
                // })
                .catch((error) => {
                res.send(error);
            });
        });
    }
    updateInterview(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let interviewTitle = req.params.interviewtitle;
            interviewServices.findByTitle(interviewTitle)
                .then((data) => {
                var interview = data;
                var interview_id = interview.id;
                interviewServices.updateInterview(req.body);
            })
                .catch(() => {
            });
        });
    }
}
exports.InterviewController = InterviewController;
