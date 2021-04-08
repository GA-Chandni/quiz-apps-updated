import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

//Style Files
import "../../style/quizCreate.css";

export default function QuizCreate() {
  const [open, setOpen] = useState(false);
  const [fields, setFields] = useState([{ value: null }]);
  const [chooseAnswer, setChooseAnswer] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (e) => {
    setOpen(false);
  };

  const handleInputChange = (e) => {
    const name = e.target.value;
    // console.log("name", name);
    setFields(name);
  };

  const handleInputChangeChoice = (event) => {
    console.log(event.target.value);
  };
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Adding Quiz Question +
      </Button>
      <form onSubmit={handleFormSubmit}>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
          style={{ width: "100%" }}
        >
          <DialogContent>
            <div className="quiz-feed">
              <div className="col-xs-9 quiz-container container">
                <h1 className="quiz-header">Add a new quiz question</h1>
                <hr />
                <div className="row rowdata">
                  <div className="col-sm-3">
                    <label> Number of questions</label>
                    <TextField
                      autoFocus
                      name="quantity"
                      margin="dense"
                      id="name"
                      className="form-control"
                      label="Enter Number of Row"
                      type="number"
                      fullWidth
                      min={1}
                    />
                  </div>
                  <div className="col-sm-1">
                    <Button
                      className="btn btn-primary go"
                      value="submit"
                      ng-click="quiz.makeQuiz()"
                      variant="contained"
                      color="primary"
                    >
                      Go
                    </Button>
                  </div>
                </div>
                <div
                  className="template "
                  ng-repeat="template in quiz.template track by $index "
                >
                  <div className="row question-container ">
                    <div className="col-sm-12 col-xs-12 ">
                      <div className="form-group ">
                        <label htmlFor="title ">Add Question</label>
                        <TextField
                          autoFocus
                          name="quantity"
                          margin="dense"
                          id="name"
                          className="form-control"
                          label="Enter Your Question here"
                          type="text"
                          fullWidth
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="answer-header ">Answer Choices</div>
                  <div className="row answer-row ">
                    <div className=" col-sm-9 col-xs-12 ">
                      <input
                        type="text "
                        className="form-control correct-answer "
                        placeholder="Correct answer choice "
                        onChange={handleInputChangeChoice}
                      />
                    </div>
                  </div>
                  <div className="row answer-row ">
                    <div className=" col-sm-9 col-xs-12 ">
                      <input
                        type="text "
                        className="form-control wrong-answer "
                        placeholder="Wrong answer choice "
                        onChange={handleInputChangeChoice}
                      />
                    </div>
                  </div>
                  <div className="row answer-row ">
                    <div className=" col-sm-9 col-xs-12 ">
                      <input
                        type="text "
                        className="form-control wrong-answer "
                        placeholder="Wrong answer choice "
                        onChange={handleInputChangeChoice}
                      />
                    </div>
                  </div>
                  <div className="row answer-row last-wrong ">
                    <div className=" col-sm-9 col-xs-12 ">
                      <input
                        type="text "
                        className="form-control wrong-answer "
                        placeholder="Wrong answer choice "
                        onChange={handleInputChangeChoice}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </form>
    </div>
  );
}
