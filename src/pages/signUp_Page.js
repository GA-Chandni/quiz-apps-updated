import React, { useState } from "react";
import { Button } from "@material-ui/core";
import "../style/loginPage.css";

export default function LoginPage() {
  const [admin, setAdmin] = useState(true);

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="main">
      <div className="panel">
        <div className="panel__form-wrapper">
          <ul className="panel__headers">
            <span href="#login-form" className=" panel__link" role="button">
              Sign Up
            </span>
          </ul>
          <div className="panel__forms">
            {/*================================= Login Form ============================== */}
            {/* <form
              className="form panel__login-form"
              id="login-form"
              
            > */}
            <div className="form__row">
              <input
                type="text"
                id="username"
                className="form__input"
                name="login-username"
                required
                onChange={(e) => {
                  setAdmin(e.target.value);
                }}
              />
              <span className="form__bar" />
              <label htmlFor="email" className="form__label">
                Username
              </label>
              <span className="form__error" />
            </div>
            <div className="form__row">
              <input
                type="password"
                id="password"
                className="form__input"
                name="login-pass"
                required
              />
              <span className="form__bar" />
              <label htmlFor="password" className="form__label">
                Password
              </label>
              <span className="form__error" />
            </div>
            <div className="form__row">
              <Button
                type="submit"
                className="form__submit"
                defaultValue="Get Started!"
                onSubmit={handleChange}
                variant="contained"
                color="secondary"
              >
                Start
              </Button>
              <span
                href="#password-form"
                className="form__retrieve-pass"
                role="button"
              >
                Forgot Password?
              </span>
            </div>
            {/* </form> */}
          </div>
        </div>
      </div>
    </div>
  );
}
