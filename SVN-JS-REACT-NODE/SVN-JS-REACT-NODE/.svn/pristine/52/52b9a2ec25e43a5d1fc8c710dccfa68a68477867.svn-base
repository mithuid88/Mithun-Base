import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { validateEmail, validatePassword } from "../../helpers/validation";
import { userVerifyEmail, changePassword } from '../../redux/actions/userAction';

import { showLoader, hideLoader } from "../../helpers/utils";

import "./ForgotPassword.css";

import loginImage from "../../images/login.webp";

const ForgotPassword = () => {
    const [forgotPasswordState, setForgotPasswordState] = useState({
        emailError: false,
        pwdError: false,
        cnfPwdError: false,
        emailExists: false,
        emailMessage: '',
        passwordSuccess: false,
        passwordMessage: ''
    });

    const emailRef = useRef();
    const pwdRef = useRef();
    const cnfPwdRef = useRef();

    const dispatch = useDispatch();

    const { userStore } = useSelector(state => state);
    const { isLoading } = userStore;

    const verifyEmailHandler = async (e) => {
        e.preventDefault();

        let isEmailValid = true;

        if (validateEmail(emailRef.current.value)) {
            // setEmailError(false);
            setForgotPasswordState({
                ...forgotPasswordState,
                emailError: false
            });
        }
        else {
            // setEmailError(true);
            setForgotPasswordState({
                ...forgotPasswordState,
                emailError: true
            });
            isEmailValid = false;
        }

        if (isEmailValid) {
            const emailVerification = await userVerifyEmail({ userEmail: emailRef.current.value })(dispatch);
            console.log(emailVerification);
            if (emailVerification && typeof emailVerification === "object") {
                const { isSuccess, message } = emailVerification;
                // setEmailExists(isSuccess);
                // setEmailMessage(message);

                // setPasswordSuccess(true);
                // setPasswordMessage('');
                setForgotPasswordState({
                    ...forgotPasswordState,
                    emailExists: isSuccess,
                    emailMessage: message,
                    passwordSuccess: true,
                    passwordMessage: ''
                });
            }
        }
    }

    const verifyPasswordHandler = async (e) => {
        let isPasswordValid = true;

        if (validatePassword(pwdRef.current.value)) {
            // setPwdError(false);
            setForgotPasswordState({
                ...forgotPasswordState,
                pwdError: false
            });
        }
        else {
            // setPwdError(true);
            setForgotPasswordState({
                ...forgotPasswordState,
                pwdError: true
            });
            isPasswordValid = false;
        }

        if (pwdRef.current.value === cnfPwdRef.current.value) {
            // setCnfPwdError(false);
            setForgotPasswordState({
                ...forgotPasswordState,
                cnfPwdError: false
            });
        }
        else {
            // setCnfPwdError(true);
            setForgotPasswordState({
                ...forgotPasswordState,
                cnfPwdError: true
            });
            isPasswordValid = false;
        }

        if (isPasswordValid) {
            const passwordChange = await changePassword({
                userEmail: emailRef.current.value,
                password: pwdRef.current.value
            })(dispatch);
            console.log(passwordChange);
            if (passwordChange && typeof passwordChange === "object") {
                const { isSuccess, message } = passwordChange;
                if (isSuccess) {
                    // setEmailExists(false);
                    // setEmailMessage(false);
                    // setPasswordSuccess(true);
                    // setPasswordMessage(message);
                    setForgotPasswordState({
                        ...forgotPasswordState,
                        emailExists: false,
                        emailMessage: false,
                        passwordSuccess: true,
                        passwordMessage: message
                    });

                    // resetting form
                    emailRef.current.value = "";
                    pwdRef.current.value = "";
                    cnfPwdRef.current.value = "";
                }
                else {
                    // setPasswordMessage(message);
                    setForgotPasswordState({
                        ...forgotPasswordState,
                        passwordSuccess: false,
                        passwordMessage: message
                    });
                }
            }
        }
    }

    useEffect(() => {
        if (isLoading) showLoader();
        else hideLoader();
    }, [isLoading]);

    return (
        <section className="vh-100">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src={loginImage} className="img-fluid" alt="Forgot Password" />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                            Forgot Password
                        </p>
                        <form className="mx-1 mx-md-4">
                            <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fa fa-envelope fa-lg mt-2 me-3 fa-fw" />
                                <div className="form-outline flex-fill mb-0">
                                    <input
                                        type="email"
                                        id="email"
                                        className="form-control"
                                        placeholder="Email*"
                                        disabled={forgotPasswordState.emailExists}
                                        ref={emailRef}
                                    />
                                    {forgotPasswordState.emailError && (
                                        <small className="form-text text-danger">
                                            Please enter valid email address
                                        </small>
                                    )}
                                </div>
                            </div>
                            {forgotPasswordState.emailExists && (
                                <>
                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fa fa-lock fa-lg mt-2 me-3 fa-fw" />
                                        <div className="form-outline flex-fill mb-0">
                                            <input
                                                type="password"
                                                id="password"
                                                className="form-control"
                                                placeholder="Password*"
                                                ref={pwdRef}
                                            />
                                            {forgotPasswordState.pwdError && (
                                                <small className="form-text text-danger">
                                                    Please enter combination of uppercase, lowercase and
                                                    number. Minimum length is 8.
                                                </small>
                                            )}
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fa fa-key fa-lg mt-2 me-3 fa-fw"></i>
                                        <div className="form-outline flex-fill mb-0">
                                            <input
                                                type="password"
                                                id="confirmPassword"
                                                placeholder="Confirm Password*"
                                                className="form-control"
                                                ref={cnfPwdRef}
                                            />
                                            {forgotPasswordState.cnfPwdError && (
                                                <small className="form-text text-danger">
                                                    Password and confirm password are not matching
                                                </small>
                                            )}
                                            {forgotPasswordState.passwordMessage && (
                                                <small className={`form-text text-${forgotPasswordState.passwordSuccess ? 'success' : 'danger'}`}>
                                                    {forgotPasswordState.passwordMessage}
                                                </small>
                                            )}
                                        </div>
                                    </div>
                                </>
                            )}
                            {forgotPasswordState.emailMessage && (
                                <small className={`form-text text-${forgotPasswordState.emailExists ? 'success' : 'danger'}`}>
                                    {forgotPasswordState.emailMessage}
                                </small>
                            )}
                            {!forgotPasswordState.emailExists && (<div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                <button
                                    type="button"
                                    className={`btn btn-primary btn-lg`}
                                    onClick={verifyEmailHandler}
                                >
                                    Verify Email address
                                </button>
                            </div>)}
                            {forgotPasswordState.emailExists && (<div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                <button
                                    type="button"
                                    className={`btn btn-primary btn-lg`}
                                    onClick={verifyPasswordHandler}
                                >
                                    Set Password
                                </button>
                            </div>)}

                        </form>
                        <div className="form-check d-flex justify-content-center mb-3">
                            <p className="small fw-bold mt-2 pt-1 mb-0">
                                Don't have an account? <Link to={"/user/signup"}>Register</Link>
                            </p>
                        </div>
                        <div className="form-check d-flex justify-content-center mb-5">
                            <p className="small fw-bold mt-2 pt-1 mb-0">
                                Already have an account? <Link to={"/user/login"}>Login</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ForgotPassword;