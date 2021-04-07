import React, { useState,useEffect } from "react";
import { Button } from "@material-ui/core";
import { Question } from "../helper/quizQuestionBank";


const QuizEndScreen = (props) => {
  const [restartQuiz,setRestartQuiz] = useState(false);

  useEffect(() => {
     if(Question.length>0){
        // console.log('right')
     }
  }, [])

  const handleRestartQuiz = (e) => {
    // props.setScore(0);
    setRestartQuiz(props.history.push("/quiz-test"))
  };

  return (
    <div className="endScreen">
      <h1>Quiz Finished</h1>
      <h3>
        {props.score}/{Question.length}
      </h3>
      <Button variant="contained" color="default" onClick={handleRestartQuiz}>
        Restart Quiz Test
      </Button>
    </div>
  );
};
export default QuizEndScreen;
