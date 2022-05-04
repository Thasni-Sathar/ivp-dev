import { Interview } from "../models/interviews"


export class InterviewService{

    createInterview(interview:any){
        var newInterview = new Interview(interview);
        return newInterview.save();
    }

    findByTitle(title:any) {
        return Interview.findOne({
            where:{
                interviewTitle:title
            }
        })
    }

    updateInterview(interview:any){
        const hi = "hi";
        return  ({
            hi
        })
    }

}