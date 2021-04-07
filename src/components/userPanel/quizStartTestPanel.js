import React from "react";
import { Button } from "@material-ui/core";

export default function QuizStartTestPanel(props) {
  const handleClick = () => {
    props.history.push('/quiz-test')
  };
  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleClick}>
        Start Quiz Test
      </Button>
    </div>
  );
}
