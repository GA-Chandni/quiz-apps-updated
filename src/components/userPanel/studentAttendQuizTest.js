import React, { useState } from "react";
import { Button, List, ListItem, ListItemText } from "@material-ui/core";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

//CUSTOM => QUIZ QUESTION FILES
import { Question } from "../../helper/quizQuestionBank";

//STYLE FILES

function StudentAttendQuizTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [optionChosen, setOptionChosen] = useState("");
  const nextQuestion = () => {
      if(Question[currentQuestion].answer==optionChosen){
            console.log('1');
      }
  };

  return (
    <div className="quiz">
      <h3>{Question[currentQuestion].prompt}</h3>
      <div className="option-list-main">
        <List className="optionList">
          <ListItem>
            <ListItemAvatar>A</ListItemAvatar>
            <Button variant="contained" color="secondary">
              {Question[currentQuestion].optionA}
            </Button >
          </ListItem>
          <ListItem>
            <ListItemAvatar>B</ListItemAvatar>
            <Button variant="contained" color="secondary">{Question[currentQuestion].optionB}</Button>
          </ListItem>
          <ListItem>
            <ListItemAvatar>C</ListItemAvatar>
            <Button variant="contained" color="secondary">{Question[currentQuestion].optionC}</Button>
          </ListItem>
          <ListItem>
            <ListItemAvatar>D</ListItemAvatar>
            <Button variant="contained" color="secondary">{Question[currentQuestion].optionD}</Button>
          </ListItem>
        </List>
      </div>
      <Button variant="contained" color="secondary" onClick={nextQuestion}>
        Next
      </Button>
    </div>
  );
}

export default StudentAttendQuizTest;
