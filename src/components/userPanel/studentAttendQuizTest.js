// NPM PACKAGE
import React, { useState } from "react";

//MATERIAL UI 
import { Button, List, ListItem,ListItemAvatar } from "@material-ui/core";

//CUSTOM => QUIZ QUESTION FILES
import { Question } from "../../helper/quizQuestionBank";

//STYLE FILE
import '../../style/studentAttendQuizTest_Style.css'

//MAIN COMPONENTS:
function StudentAttendQuizTest(props) {
  //stuff State
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const [score, setScore] = useState(0);
  // const [quizFinised, setQuizfinised] = useState(false);
  // const [restartQuiz, setRestartQuiz] = useState(false);


  //Click on Next Button Functionality
  const nextQuestion = (props) => {
    if (Question[currentQuestion].answer == optionChosen) {
      let count = score + 1;
      setScore(count);
      // console.log(count);
    }
    // alert(score);
    setCurrentQuestion(currentQuestion + 1);
  };

  //Finished Quiz Functinality
  const finishedQuizQuestion = () => {
    //Redirect Quiz end screen when Quiz test is finished
    // setQuizfinised(props.history.push("/finished-quiz-screen"));
    if (currentQuestion === Question.length - 1) {
      setScore(true);
      return;
    }
  };

  //Total Result and score out of Total question
  const handleRestartQuiz = () => {
    // setRestartQuiz(props.history.push("/quiz-test"));    //redirect 
    window.location.reload(false);        // reload page
  };

  //Consoling parts:
  // console.log('setOptionChosen',setOptionChosen);    //option A<B<C<D
  // console.log("Question.length", Question.length - 1);   //question length
  // console.log('promot',Question[currentQuestion].prompt);  // promot =question title

  return (
    <div className="quiz">
      {finishedQuizQuestion &&
      currentQuestion !== Question.length &&
      Question ? (
        <div className='mainDiv'>
          {/*================================Show the prompt==============================*/}
          <h3 className='prompt-question'>{Question[currentQuestion].prompt}</h3>
          <div className="option-list-main quizBody" id="mainBody" >
            <List className="optionList  ">
              <ListItem>
                <ListItemAvatar>A</ListItemAvatar>
                <Button
                  variant="contained"
                  color="secondary"
                  id='option'
                  onClick={() => setOptionChosen("A")}    //select the option 
                >
                  {Question[currentQuestion].optionA}
                </Button>
              </ListItem>
              <ListItem>
                <ListItemAvatar>B</ListItemAvatar>
                <Button
                  variant="contained"
                  color="secondary"
                 id='option'
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
                 id='option'
                  onClick={() => setOptionChosen("C")}
                >
                  {Question[currentQuestion].optionC}
                </Button>
              </ListItem>
              <ListItem>
                <ListItemAvatar>D</ListItemAvatar>
                <Button
                  variant="contained"
                  id='option'
                  color="secondary"
                  onClick={() => setOptionChosen("D")}
                >
                  {Question[currentQuestion].optionD}
                </Button>
              </ListItem>
            </List>
          </div>
          <div className='nextButton'>
            {/* {currentQuestion === Question.length - 1 ? (
              <Button
                variant="contained"
                color="primary"
                onClick={finishedQuizQuestion}
                // value={score}
              >
                Finished Quiz
              </Button>
            ) : ( */}
            <Button
              variant="contained"
              color="primary"
              id='nxtBtn'
              onClick={nextQuestion}
            >
              Next
            </Button>
            {/* )} */}
          </div>
        </div>
      ) : (
        //=================================== Showing the result ==============================
        <div className="endScreen">
          <h1>Quiz Finished</h1>
          <h3>
           Your Score is:  {score}/{Question.length}
          </h3>
          <Button
            variant="contained"
            color="default"
            id="exitBtn"
            onClick={handleRestartQuiz}
            style={{background: 'steelblue',color:'white'}}
          >
            Restart Quiz Test
          </Button>
        </div>
      )}
    </div>
  );
}

export default StudentAttendQuizTest;
