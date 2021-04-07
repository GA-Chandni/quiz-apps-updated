import React, { useState } from "react";
import { Button, List, ListItem, ListItemText } from "@material-ui/core";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

//CUSTOM => QUIZ QUESTION FILES
import { Question } from "../../helper/quizQuestionBank";
// import { Redirect } from "react-router";
import QuizEndScreen from "../../common/quizEndScreen";

//STYLE FILES

function StudentAttendQuizTest(props) {
  //stuff State
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const [score, setScore] = useState(0);
  const [quizFinised, setQuizfinised] = useState(false);

  //Click on Next Button Functionality

  const nextQuestion = (props) => {
    if (Question[currentQuestion].answer == optionChosen) {
      let count = score + 1;
      setScore(count);

      console.log(count);
    }
    // alert(score);
    setCurrentQuestion(currentQuestion + 1);
  };

  //Finished Quiz Functinality==========
  const finishedQuizQuestion = () => {
    if (Question[currentQuestion].answer == optionChosen) {
      // setScored(scored + 1);
      let count = score + 1;
      setScore(count);
    }
    //Finished the quiz question and showing end screen
    setQuizfinised(props.history.push("/finished-quiz-screen"));
  };

  // console.log('setOptionChosen',setOptionChosen);
  console.log("Question.length", Question.length - 1);
  return (
    <div className="quiz">
      <h3>{Question[currentQuestion].prompt}</h3>
      <div className="option-list-main">
        <List className="optionList">
          <ListItem>
            <ListItemAvatar>A</ListItemAvatar>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setOptionChosen("A")}
            >
              {Question[currentQuestion].optionA}
            </Button>
          </ListItem>
          <ListItem>
            <ListItemAvatar>B</ListItemAvatar>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setOptionChosen("B")}
            >
              {Question[currentQuestion].optionB}
            </Button>
          </ListItem>
          <ListItem>
            <ListItemAvatar>C</ListItemAvatar>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setOptionChosen("C")}
            >
              {Question[currentQuestion].optionC}
            </Button>
          </ListItem>
          <ListItem>
            <ListItemAvatar>D</ListItemAvatar>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setOptionChosen("D")}
            >
              {Question[currentQuestion].optionD}
            </Button>
          </ListItem>
        </List>
      </div>

      {/*================= FOR FINISHED QUIZ AND NEXT BUTTON ====================*/}
      {currentQuestion === Question.length - 1 ? (
        <Button
          variant="contained"
          color="primary"
          onClick={finishedQuizQuestion}
          value={score}
        >
          Finished Quiz
          {/* <QuizEndScreen score={score}/> */}
        </Button>
      ) : (
        <Button variant="contained" color="secondary" onClick={nextQuestion}>
          Next {score}
        </Button>
      )}
      {Question.length > 0 &&(
        <h1>
          {score}
        </h1>
       )}
    </div>
  );
}

export default StudentAttendQuizTest;
