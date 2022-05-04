import { Router } from 'express'
const router = Router()


import { InterviewController } from '../controller/interview.controller';

const interviewController = new InterviewController();

router.post('/interview',interviewController.addInterview);
router.get('/interview/:interviewtitle',interviewController.getQuestionsByInterviewId);
router.put('/interview/:interviewtitle',interviewController.updateInterview);

module.exports = router