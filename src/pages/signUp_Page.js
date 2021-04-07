// import React, { useState } from "react";

// export default function LoginPage() {
//   const [admin, setAdmin] = useState(true);

//   const handleChange = (e) => {
//     console.log(e.target.value);
//   };
//   return (
//     <div className="main">
//       <div className="panel">
//         <div className="panel__form-wrapper">
//           <ul className="panel__headers">
//             <span href="#login-form" className=" panel__link" role="button">
//               Sign Up
//             </span>
//           </ul>
//           <div className="panel__forms">
//             {/*================================= Login Form ============================== */}
//             {/* <form
//               className="form panel__login-form"
//               id="login-form"

//             > */}
//             <div className="form__row">
//               <input
//                 type="text"
//                 id="username"
//                 className="form__input"
//                 name="login-username"
//                 required
//                 onChange={(e) => {
//                   setAdmin(e.target.value);
//                 }}
//               />
//               <span className="form__bar" />
//               <label htmlFor="email" className="form__label">
//                 Username
//               </label>
//               <span className="form__error" />
//             </div>
//             <div className="form__row">
//               <input
//                 type="password"
//                 id="password"
//                 className="form__input"
//                 name="login-pass"
//                 required
//               />
//               <span className="form__bar" />
//               <label htmlFor="password" className="form__label">
//                 Password
//               </label>
//               <span className="form__error" />
//             </div>
//             <div className="form__row">
//               <Button
//                 type="submit"
//                 className="form__submit"
//                 defaultValue="Get Started!"
//                 onSubmit={handleChange}
//                 variant="contained"
//                 color="secondary"
//               >
//                 Start
//               </Button>
//               <span
//                 href="#password-form"
//                 className="form__retrieve-pass"
//                 role="button"
//               >
//                 Forgot Password?
//               </span>
//             </div>
//             {/* </form> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { Link, Redirect, useHistory } from "react-router-dom";
import { Alert } from "react-bootstrap";
import Login from "../pages/loginPage";

import "../style/loginPage.css";

function Registration(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  const [info] = useState(true);
  let history = useHistory();

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

  // Directly to the login page
  // function handleClick() {
  //   if(setLogin(!login)){
  //     return <Redirect to='/login' />
  //   }

  // }

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
                  {/*================================= Login Form ============================== */}
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
