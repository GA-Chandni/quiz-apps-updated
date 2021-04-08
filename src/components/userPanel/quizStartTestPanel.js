import React from "react";
import { Button } from "@material-ui/core";

export default function QuizStartTestPanel(props) {

  //Redirect to Quiz test
  const handleClick = () => {
    props.history.push('/quiz-test')
  };
  return (
    <div>
      {/* =========================== Start Button =============================== */}
      <Button variant="contained" color="secondary" onClick={handleClick}>
        Start Quiz Test
      </Button>
    </div>
  );
}
