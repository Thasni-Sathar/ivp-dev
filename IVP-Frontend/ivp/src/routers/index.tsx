import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';


import Login from "../pages/login/loginPage";
import Tile from "../pages/tile/tilePage";
import Interview from "../pages/interview/interview";
import Question from "../pages/question/question";
import InterviewSchedule from "../pages/interviewSchedule/interviewSchedule";




function RouterIndex() {

    return (
        <>
            <Router>


                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/tile" element={<Tile />} />
                    <Route path="/interview" element={<Interview />} />
                    <Route path="/question" element={<Question />} />
                    <Route path="/interviewSchedule" element={<InterviewSchedule />} />




                </Routes>

            </Router>
        </>
    );
}

export default RouterIndex;