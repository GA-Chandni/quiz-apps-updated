//Npm Modules
import React, { Component } from "react";

//MATERIAL UI
import { Button } from "@material-ui/core";

//ROUTER 
import { Link, Redirect } from "react-router-dom";

//STYLE CSS
import "../style/loginPage.css";


//MAIN COMPONENTS: 
export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    // let loggedIn = false;

    //if loggedIn False also get the local stroage token
    const token = localStorage.getItem("token");
    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }
    //Defined State
    this.state = {
      username: "",
      password: "",
      loggedIn,
    };
    // data binding
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  //Calling events
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
    // console.log(e.target.value);
  }

  submitForm(e) {
    e.preventDefault();
    const { username, password } = this.state;

    //login logic and set the local stroage token
    // if (username === "admin" && password === "admin") {
    //   localStorage.setItem("token", "chandnitryingtolearncoding");
    //   this.setState({
    //     loggedIn: true, //if loggedIn true
    //   });
    //   // console.log('success');
    // }

    //for user panel and admin panel
    if (username === "admin" && password === "admin") {
      localStorage.setItem("token", "chandnitryingtolearncoding");
      this.setState({
        loggedIn: true, //if loggedIn true
      });
      this.props.history.push("/admin-panel/dashboard/");
    } else if (
      this.state.username !== "admin" ||
      this.state.password !== "admin"
    ) {
      this.setState({
        loggedIn: true, //if loggedIn true
      });
      this.props.history.push("/quiz-test-start/");
      return;
    } else {
      alert("Login Failed ! . Check Username and Password.");
    }

    // console.log(`${this.state.username}`);
  }

  render() {
    //redirect on the dashboard after login if loggedIn true
    // if (this.state.loggedIn) {
    //   return <Redirect to="/admin-panel/dashboard/" />;
    // }

    return (
      <div className="main">
        <div className="panel">
          <div className="panel__form-wrapper">
            <ul className="panel__headers">
              <span href="#login-form" className=" panel__link" role="button">
                Login
              </span>
            </ul>
            <div className="panel__forms">
              {/*================================= Login Form ============================== */}
              <form
                className="form panel__login-form"
                onSubmit={this.submitForm}
              >
                <div className="form__row">
                  <input
                    type="text"
                    id="username"
                    className="form__input"
                    name="username"
                    valu={this.state.username}
                    onChange={this.onChange}
                    required
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
                    name="password"
                    valu={this.state.password}
                    onChange={this.onChange}
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

                  {/*================================= SIGN UP LINK HERE ================================*/}
                  <Link to="/sign-up">
                    <span href="#password-form" role="button" className='login-signup-btn'>
                      Sign Up :)
                    </span>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
