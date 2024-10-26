import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { validateEmail, validatePassword } from "../../helpers/validation";
import { userLogin } from "../../redux/actions/userAction";

import { showLoader, hideLoader } from "../../helpers/utils";

import "./Login.css";

import loginImage from "../../images/login.webp";

const Login = () => {
  const [emailError, setEmailError] = useState(false);
  const [pwdError, setPwdError] = useState(false);
  const [isloggingIn, setLoggingIn] = useState(false);

  const emailRef = useRef();
  const pwdRef = useRef();
  
  const dispatch = useDispatch();

  const { userStore } = useSelector((state) => state);
  const { isLoading } = userStore;

  const loginHandler = async (e) => {
    e.preventDefault();
    let isValid = true;

    if (validateEmail(emailRef.current.value)) {
      setEmailError(false);
    } else {
      setEmailError(true);
      isValid = false;
    }

    if (validatePassword(pwdRef.current.value)) {
      setPwdError(false);
    } else {
      setPwdError(true);
      isValid = false;
    }

    if (isValid) {
      const login = await userLogin({
        email: emailRef.current.value,
        password: pwdRef.current.value,
      })(dispatch);
      console.log(login);
    }
  };

  useEffect(() => {
    if(isLoading) showLoader();
    else hideLoader();
  }, [isLoading]);

  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src={loginImage} className="img-fluid" alt="Login" />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
              Login
            </p>

            <form className="mx-1 mx-md-4">
              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fa fa-envelope fa-lg mt-2 me-3 fa-fw"></i>
                <div className="form-outline flex-fill mb-0">
                  {/* <label className="form-label" for="form3Example3c">
                    Your Email
                  </label> */}
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Email*"
                    ref={emailRef}
                  />
                  {emailError && (
                    <small className="form-text text-danger">
                      Please enter valid email address
                    </small>
                  )}
                </div>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fa fa-lock fa-lg mt-2 me-3 fa-fw"></i>
                <div className="form-outline flex-fill mb-0">
                  {/* <label className="form-label" for="form3Example4c">
                    Password
                  </label> */}
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Password*"
                    ref={pwdRef}
                  />
                  {pwdError && (
                    <small className="form-text text-danger">
                      Please enter combination of uppercase, lowercase and
                      number. Minimum length is 8.
                    </small>
                  )}
                </div>
              </div>

              <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                <button
                  type="button"
                  className={`btn btn-primary btn-lg ${isloggingIn ? "disabled" : ''}`}
                  onClick={loginHandler}
                >
                  {isloggingIn ? "Logging In" : "Login"}
                </button>
              </div>
            </form>
            <div className="form-check d-flex justify-content-center">
              <p className="small fw-bold mt-2 pt-1 mb-0">
                Don't have an account? <Link to={"/user/signup"}>Register</Link>
              </p>
            </div>
            <div className="form-check d-flex justify-content-center mb-5">
              <p className="small fw-bold mt-2 pt-1 mb-0">
                <Link to={"/user/forgotPass"}>Forgot Password</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
        <div className="text-white mb-3 mb-md-0">
          © 2023 Indegene. All rights reserved.
        </div>

        <div>
          <a
            href="https://twitter.com/indegeneinsight"
            className="text-white me-4"
            target={"_blank"}
          >
            <i className="fa fa-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/indegene/"
            className="text-white"
            target={"_blank"}
          >
            <i className="fa fa-linkedin"></i>
          </a>
        </div>
      </div> */}
    </section>
  );
};

export default Login;
