//Npm package
import React, { Component } from "react";

//Material UI
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

//Main Components
export default class LogoutPage extends Component {
  constructor(props) {
    super(props);
    //remove the token
    localStorage.removeItem("token");
  }

  render() {
    return (
      <div>
        Please Redirect on Login Page
        <Link to="/login">
          <Button variant="contained" color="secondary">
            Login Again
          </Button>
        </Link>
      </div>
    );
  }
}
