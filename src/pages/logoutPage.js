import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

export default class LogoutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        Logout
        <Button variant="contained" color="secondary">
          <Link to="/">Login Again</Link>
        </Button>
      </div>
    );
  }
}
