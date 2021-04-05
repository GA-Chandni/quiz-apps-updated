// NPM packages
import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

//Custom
import LoginPage from "../pages/loginPage";
import SignUp from "../pages/signUp_Page";
import LocalDashboard from "../pages/localDashbaordPage";
import Dashboard from "../components/adminPanel/dashboard";
import QuizCreate from "../components/adminPanel/quizCreate";
import QuizList from "../components/adminPanel/quizList";
import Logout from "../pages/logoutPage";

// Others

const RouterPath = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          {/* <Redirect exact from="/" to="/organization" /> */}
          <Route exact path="/" component={LocalDashboard} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/sign-up" component={SignUp} />

          {/*======================== Admin Panel ==========================================  */}
          <Route exact path="/admin-panel/dashboard" component={Dashboard} />
          <Route exact path="/admin-panel/quiz-create" component={QuizCreate} />
          <Route exact path="/admin-panel/quiz-list" component={QuizList} />

          {/*=========================== logOut Panel=======================================  */}
          <Route path="./logout" component={Logout} />

        </Switch>
      </Router>

      {/* Common footer */}
    </Fragment>
  );
};

export default RouterPath;
