import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import {
  validateName,
  validateEmail,
  validatePassword,
} from "../../helpers/validation";

import "./Signup.css";

import signupImage from "../../images/signup.webp";
import { API_HOST } from "../../configs/api";
import axios from "axios";

const Signup = () => {
  const [engError, setEngError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [pwdError, setPwdError] = useState(false);
  const [cnfPwdError, setCnfPwdError] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();
  const pwdRef = useRef();
  const cnfPwdRef = useRef();

  const signupHandler = async (e) => {
    e.preventDefault();
    let isValid = true;
    const engagementElem = document.querySelector(
      'input[name="engagement"]:checked'
    );
    if (engagementElem) {
      setEngError(false);
    } else {
      setEngError(true);
      isValid = false;
    }

    if (validateName(nameRef.current.value)) {
      setNameError(false);
    } else {
      setNameError(true);
      isValid = false;
    }

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

    if (pwdRef.current.value === cnfPwdRef.current.value) {
      setCnfPwdError(false);
    } else {
      setCnfPwdError(true);
      isValid = false;
    }

    if (isValid) {
      const { data } = await axios.post(`${API_HOST}user/signup`, {
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: pwdRef.current.value,
        engagement: engagementElem.value,
      });
      if (data.isSuccess) {
          nameRef.current.value = "";
          emailRef.current.value = "";
          pwdRef.current.value = "";
          cnfPwdRef.current.value = "";
          engagementElem.value = "";
        }
        
        window.alert(
          data.message
        );
    }
  };

  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src={signupImage} className="img-fluid" alt="Signup" />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
              Sign up
            </p>

            <form className="mx-1 mx-md-4">
              <div className="col-auto mb-4">
                <div>
                  <label className="form-label">Your engagement</label>
                </div>

                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="engagement"
                    id="amgen"
                    value="amgen"
                  />
                  <label className="form-check-label" htmlFor="amgen">
                    Amgen
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="engagement"
                    id="bi"
                    value="bi"
                  />
                  <label className="form-check-label" htmlFor="bi">
                    BI
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="engagement"
                    id="pFizer"
                    value="pFizer"
                  />
                  <label className="form-check-label" htmlFor="pFizer">
                    pFizer
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="engagement"
                    id="az"
                    value="az"
                  />
                  <label className="form-check-label" htmlFor="az">
                    AZ
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="engagement"
                    id="others"
                    value="others"
                  />
                  <label className="form-check-label" htmlFor="others">
                    Others
                  </label>
                </div>
                {engError && (
                  <div>
                    <small className="form-text text-danger">
                      Please select your engagement
                    </small>
                  </div>
                )}
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fa fa-user fa-lg mt-2 me-3 fa-fw"></i>
                <div className="form-outline flex-fill mb-0">
                  {/* <label className="form-label" htmlFor="name">
                    Your Name
                  </label> */}
                  <input
                    type="text"
                    id="name"
                    placeholder="Full Name*"
                    className="form-control"
                    ref={nameRef}
                  />
                  {nameError && (
                    <small className="form-text text-danger">
                      Please enter valid name
                    </small>
                  )}
                </div>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fa fa-envelope fa-lg mt-2 me-3 fa-fw"></i>
                <div className="form-outline flex-fill mb-0">
                  {/* <label className="form-label" htmlFor="email">
                    Your Email
                  </label> */}
                  <input
                    type="email"
                    id="email"
                    placeholder="Email*"
                    className="form-control"
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
                  {/* <label className="form-label" htmlFor="password">
                    Password
                  </label> */}
                  <input
                    type="password"
                    id="password"
                    placeholder="Password*"
                    className="form-control"
                    ref={pwdRef}
                  />
                  {pwdError && (
                    <small className="form-text text-danger">
                      Please enter combination of uppercase, lowercase and
                      number and minimum of 8 characters
                    </small>
                  )}
                </div>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fa fa-key fa-lg mt-2 me-3 fa-fw"></i>
                <div className="form-outline flex-fill mb-0">
                  {/* <label className="form-label" htmlFor="confirmPassword">
                    Repeat your password
                  </label> */}
                  <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm Password*"
                    className="form-control"
                    ref={cnfPwdRef}
                  />
                  {cnfPwdError && (
                    <small className="form-text text-danger">
                      Password and confirm password are not matching
                    </small>
                  )}
                </div>
              </div>

              <div className="form-check d-flex justify-content-center mb-5">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  value="true"
                  id="agree"
                  checked={true}
                  disabled={true}
                />
                <label className="form-check-label" htmlFor="form2Example3">
                  I agree all statements in{" "}
                  <a
                    href="https://www.indegene.com/privacy-policy"
                    target={"_blank"}
                  >
                    Terms of service
                  </a>
                </label>
              </div>

              <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  onClick={signupHandler}
                >
                  Register
                </button>
              </div>
            </form>
            <div className="form-check d-flex justify-content-center mb-5">
              <p className="small fw-bold mt-2 pt-1 mb-0">
                Already have an account? <Link to={"/user/login"}>Login</Link>
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

export default Signup;
