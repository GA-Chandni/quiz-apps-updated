import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

export default function MainPage() {
  return (
    <div>
      <h1>Hey User and admin</h1>

      <Link to="/login">
        <Button variant="contained" color="secondary">
          Sign In
        </Button>
      </Link>
      <Link to="/sign-up" style={{marginLeft: "45px"}}>
        <Button variant="contained" color="secondary">
          Sign Up
        </Button>
      </Link>
    </div>
  );
}
