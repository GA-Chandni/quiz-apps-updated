import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";

import "../../style/dashboardStyle.css";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.setItem("token");
    console.log('token',JSON.parse(token));
    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }
   
    this.state = {
      loggedIn,
    };
  }

  render() {
    if (this.state.token) {
      return <Redirect to="/admin-panel/dashboard" />;
    }

    return (
      <div>
        <div>
          <div className="row mt-4 mb-2 justify-content-center">
            <div className="col-12 sm-leaderboard text-center">
              Wooly Quiz by Nick Lord
            </div>
          </div>
          <div className="row ml-1 mr-1">
            <div className="col-lg-6 col-md-12 mt-2 mb-2 align-self-center">
              <div className="card text-white bg-primary">
                <div className="card-body">
                  <h3 className="card-title addQuizTitle">Add Quiz</h3>
                  <p className="card-text addQuiz">
                    Click below to create a new quiz.
                  </p>
                  <a href="#" className="btn text-white border-light">
                    Add quiz
                  </a>
                </div>
              </div>
            </div>
            <div className="col-6 mt-2 mb-2 align-self-center">
              <div className="card text-white bg-success">
                <div className="card-body">
                  <h3 className="card-title addQuizTitle">Add questions</h3>
                  <p className="card-text addQuiz">
                    Click below to add questions to your quiz.
                  </p>
                  <a href="#" className="btn text-white border-light">
                    Add questions
                  </a>
                </div>
              </div>
            </div>
            <div className="col-6 mt-2 mb-2 align-self-center">
              <div className="card text-white bg-warning">
                <div className="card-body">
                  <h3 className="card-title addQuizTitle">Leaderboards</h3>
                  <p className="card-text addQuiz">
                    Click below to see all leaderboards.
                  </p>
                  <a href="#" className="btn text-white border-light">
                    Leaderboards
                  </a>
                </div>
              </div>
            </div>
            <div className="col-6 mt-2 mb-2 align-self-center">
              <div className="card text-white bg-danger">
                <div className="card-body">
                  <h3 className="card-title addQuizTitle">Admin</h3>
                  <p className="card-text addQuiz">
                    Click below for admin functions.
                  </p>
                  <a href="#" className="btn text-white border-light" disabled>
                    Administration
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Button variant="contained" color="secondary">
            <Link to="/logout">Logout</Link>
          </Button>
        </div>
      </div>
    );
  }
}
