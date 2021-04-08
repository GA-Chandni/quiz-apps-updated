// NPM packages
import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//Custom
import LoginPage from "../pages/loginPage";
import SignUp from "../pages/signUp_Page";
import LocalDashboard from "../pages/localDashbaordPage";
import Dashboard from "../components/adminPanel/dashboard";
import QuizCreate from "../components/adminPanel/quizCreate";
import QuizList from "../components/adminPanel/quizList";


//user panel custom
import StudentList from "../components/adminPanel/studentList";
import QuizStartTestPanel from '../components/userPanel/quizStartTestPanel'
import StudentAttendQuizTest from '../components/userPanel/studentAttendQuizTest'

//Common Components and Quiz End Screen
import StudentTotalScroed from '../common/totalScored';
import QuizEndScreen from '../common/quizEndScreen';


//Logout 
import LogoutPage from "../pages/logoutPage";

// Others


//Main Components: 
const RouterPath = (props) => { 
  return (
    <Fragment>
      <h1>
        Quiz Application
      </h1>
      <Router {...props}>
        <Switch>
          {/* ======================= Common Header========================================= */}
          {/* <Redirect exact from="/dashboard" to="/logout" /> */}
          <Route exact path="/" component={LocalDashboard} />
          <Route  path="/login" component={LoginPage} />
          <Route  path="/sign-up" component={SignUp} />

          {/*======================== Admin Panel ==========================================  */}
          <Route exact path="/admin-panel/dashboard" component={Dashboard} />
          <Route  path="/admin-panel/quiz-create" component={QuizCreate} />
          <Route  path="/admin-panel/quiz-list" component={QuizList} />
          <Route  path="/admin-panel/student-list" component={StudentList} />

          {/*============================User Panel=========================================  */}
          
          <Route  path="/quiz-test-start" component={QuizStartTestPanel} />
          <Route  path="/quiz-test" component={StudentAttendQuizTest} />

          {/* ======================== Common components /Finsihed Quiz ==================== */}
          <Route  path="/total-scored" component={StudentTotalScroed} />
          <Route  path="/finished-quiz-screen" component={QuizEndScreen} />

          
          {/*=========================== logOut Panel=======================================  */}
          <Route exact path="/logout" component={LogoutPage} />

        </Switch>
      </Router>

      {/* Common footer */}
    </Fragment>
  );
};

export default RouterPath;
