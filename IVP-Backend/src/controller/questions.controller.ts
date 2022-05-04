import { Question } from "../models/questions";

import { QuestionService } from "../services/questions.service";
import { CategoryService } from "../services/categories.service";


const questionService = new QuestionService();
const categoriesService = new CategoryService();



export class QuestionController {

    /* To get the list of all categories */
    async getQuestionList(req: any, res: any) {
        questionService.getAllQuestions()
            .then((data: any) => {
                res.status(200).send({ message: "Questions retrieved successfully", data });
            })
            .catch((error: string) => {
                console.log(error);
            });
    }


    async addQuestion(req: any, res: any) {

        categoriesService.findByName(req.body.categoryName)
            .then((data: any) => {
                var category = data;
                let Questiondb = {
                    question: req.body.question,
                    status: req.body.status,
                    category_id: category.id
                };

                questionService.createQuestion(Questiondb)
                    .then((data) => {
                        res.status(200).send({ message: " Question created", data });
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch(() => {
                res.status(401).send({ message: "Category does not exist" })
            });
    }

    async getQuestionById(req: any, res: any) {
        let questionId: number = req.params.id;
        questionService.findByQuestionId(questionId)
            .then((data: any) => {
                if (data.data !== 'null') {
                    res.status(200).send({ message: "particular question retrieved successfully", data });
                }
            })
            .catch((error: string) => {
                res.status(401).send({ message: "questions doesn't exist" })

            });
    }
    async updateQuestionById(req: any, res: any) {
        questionService.updateQuestion(req.body, req.params.id)
            .then((data: any) => {
                res.status(200).json({ message: "question updated successfully" })
            })
            .catch((error: any) => {
                console.log(error);
            });

    }
}