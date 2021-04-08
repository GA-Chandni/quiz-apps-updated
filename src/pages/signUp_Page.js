//NPM pacakage and hooks
import React, { useState } from "react";

//Material UI
import { Button } from "@material-ui/core";

//Router
import { Link} from "react-router-dom";

//React bootstrap UI
import { Alert } from "react-bootstrap";

//Custom
import Login from "../pages/loginPage";

//Style
import "../style/loginPage.css";


//Main Components :
function Registration(props) {

  //Stuff State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  const [info] = useState(true);


  // on form submit...
  function handleFormSubmit(e) {
    e.preventDefault();   
    if (!email || !password) {
      setFlag(true);
    } else {
      setFlag(false);
      let localusername = localStorage.setItem("username",JSON.stringify(email));
      let localpswd = localStorage.setItem("password",JSON.stringify(password));
      let val = localStorage.getItem("pswd", localpswd);
      let pswrd = localStorage.getItem("pswrd", localusername);
      console.log("Saved in Local Storage",val,pswrd);     
      setLogin(!login)
    }
   
  }
  return (
    <>
      {info && (
        <div className="main">
          {login && (
            <div className="panel">
              <div className="panel__form-wrapper">
                <ul className="panel__headers">
                  <span
                    href="#login-form"
                    className=" panel__link"
                    role="button"
                  >
                    Sign Up
                  </span>
                </ul>
                <div className="panel__forms">
                  {/*================================= Sing up Form ============================== */}
                  <form
                    className="form panel__login-form"
                    id="login-form"
                    onSubmit={handleFormSubmit}
                  >
                    <div className="form__row">
                      <input
                        type="text"
                        id="username"
                        className="form__input"
                        name="login-username"
                        required
                        // onChange={(e) => {
                        //   setAdmin(e.target.value);
                        // }}
                        onChange={(event) => setEmail(event.target.value)}
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
                        onChange={(event) => setPassword(event.target.value)}
                      />
                      <span className="form__bar" />
                      <label htmlFor="password" className="form__label">
                        Password
                      </label>
                      <span className="form__error" />
                    </div>
                    <div className="form__row">
                      <Link to='/login' >
                      <Button
                        type="submit"
                        className="form__submit"
                        defaultValue="Get Started!"
                        // onSubmit={handleClick}
                        variant="contained"
                        color="secondary"
                      >
                        Start
                      </Button>
                      </Link>
                      <span
                        href="#password-form"
                        className="form__retrieve-pass"
                        role="button"
                      >
                        Forgot Password?
                      </span>
                    </div>
                    {flag && (
                      <Alert color="primary" variant="danger">
                        Every Field is important!
                      </Alert>
                    )}
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Registration;
