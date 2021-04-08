import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { Button} from "@material-ui/core/";

import "../../style/dashboardStyle.css";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    const token =localStorage.getItem("token");
    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }

    this.state = {
      loggedIn,
    };
  }

  render() {
    if (this.state.loggedIn === false) {
      return <Redirect to="/login" />;
    }

    return (
      <div>
        <h1>Admin Panel </h1>
        <div className="mainCard">
          <Link to="/admin-panel/quiz-create">
            <div className="card card-1">
              <h5 className="cardTitle">Adding Quiz Question</h5>
            </div>
          </Link>
          <Link to="/admin-panel/quiz-list">
            <div className="card card-1">
              <h5 className="cardTitle"> Quiz Question List</h5>
            </div>
          </Link>
          <Link to="/admin-panel/student-list">
            <div className="card card-1">
              <h5 className="cardTitle">Student List</h5>
            </div>
          </Link>
          <div className="card card-1">
            <h5 className="cardTitle">Total Scored</h5>
          </div>
        </div>
        <br />
        <div>
          <Button variant="contained" color="secondary">
            <Link to="/logout">Logout</Link>
          </Button>
        </div>
      </div>
    );
  }
}
