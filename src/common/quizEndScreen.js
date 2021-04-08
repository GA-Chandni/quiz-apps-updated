import React, { useState,useEffect } from "react";
import { Button } from "@material-ui/core";
import { Question } from "../helper/quizQuestionBank";


const QuizEndScreen = (props) => {
  const [restartQuiz,setRestartQuiz] = useState(true);

  const handleRestartQuiz = (e) => {
    // props.setScore(0);
    setRestartQuiz(props.history.push("/quiz-test"))
  };

  return (
    <div className="endScreen">
      <Button variant="contained" color="default" onClick={handleRestartQuiz}>
        Restart Quiz Test
      </Button>
    </div>
  );
};
export default QuizEndScreen;
