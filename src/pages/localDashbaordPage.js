import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

export default function MainPage() {
  return (
    <div className="localDashboardPage">
      <h1>Hey User and admin</h1>
      <h2 className='title' style={{color:'white'}}>Plaese Login here</h2>
      <Link to="/login">
        <Button variant="contained" color="secondary">
          Sign In
        </Button>
      </Link>
      <h2 style={{color:'white'}}>
        Plaese Sign up Here
      </h2>
      <Link to="/sign-up" style={{ marginLeft: "45px" }}>
        <Button variant="contained" color="secondary">
          Sign Up
        </Button>
      </Link>
    </div>
  );
}
