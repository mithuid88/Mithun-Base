import axios from "axios";
import { API_HOST } from "../../configs/api";

export const TYPES = {
  LOGIN_USER_START: "LOGIN_USER_START",
  LOGIN_USER_COMPLETE: "LOGIN_USER_COMPLETE",
  LOGIN_USER_ERROR: "LOGIN_USER_ERROR",

  FORGOT_PASS_EMAIL_VERIFY_START: "FORGOT_PASS_EMAIL_VERIFY_START",
  FORGOT_PASS_EMAIL_VERIFY_COMPLETE: "FORGOT_PASS_EMAIL_VERIFY_COMPLETE",
  FORGOT_PASS_EMAIL_VERIFY_ERROR: "FORGOT_PASS_EMAIL_VERIFY_ERROR",

  FORGOT_PASS_VERIFY_PASSWORD_START: "FORGOT_PASS_VERIFY_PASSWORD_START",
  FORGOT_PASS_VERIFY_PASSWORD_COMPLETE: "FORGOT_PASS_VERIFY_PASSWORD_COMPLETE",
  FORGOT_PASS_VERIFY_PASSWORD_ERROR: "FORGOT_PASS_VERIFY_PASSWORD_ERROR",

  LOGOUT_USER: "LOGOUT_USER"
};

export const userLogin = (userBody) => async (dispatch) => {
  dispatch({ type: TYPES.LOGIN_USER_START });
  try {
    const { data } = await axios.post(`${API_HOST}user/login`, userBody);
    if(data.isSuccess) {
        localStorage.setItem("engagement", data.engagement);
        localStorage.setItem("token", data.token);
        localStorage.setItem("email", data.email);
        dispatch({ type: TYPES.LOGIN_USER_COMPLETE, data: data });
    }
    else {
        window.alert(data.msg);
        dispatch({ type: TYPES.LOGIN_USER_ERROR, error: data.msg });
    }
  } catch (error) {
    dispatch({ type: TYPES.LOGIN_USER_ERROR, error: error });
  }
};

export const logoutUser = () => async (dispatch) => {
  localStorage.clear();
  dispatch({
    type: TYPES.LOGOUT_USER
  })
};

export const userVerifyEmail = ({ userEmail }) => async (dispatch) => {
    dispatch({ type: TYPES.FORGOT_PASS_EMAIL_VERIFY_START, data: userEmail });
    try {
        const { data } = await axios.post(`${API_HOST}user/verifyEmail`, { email: userEmail });
        if(data.isSuccess) dispatch({ type: TYPES.FORGOT_PASS_EMAIL_VERIFY_COMPLETE });
        else dispatch({ type: TYPES.FORGOT_PASS_EMAIL_VERIFY_ERROR });
        return data;
    }
    catch(err) {
        dispatch({ type: TYPES.FORGOT_PASS_EMAIL_VERIFY_ERROR });
        return err;
    }
}

export const changePassword = ({ userEmail, password }) => async (dispatch) => {
    dispatch({
        type: TYPES.FORGOT_PASS_VERIFY_PASSWORD_START,
        data: { email: userEmail, password: password }
    });
    try {
        const { data } = await axios.post(`${API_HOST}user/changePassword`, {
            email: userEmail,
            newPassword: password
        });
        if(data.isSuccess) dispatch({ type: TYPES.FORGOT_PASS_VERIFY_PASSWORD_COMPLETE });
        else dispatch({ type: TYPES.FORGOT_PASS_VERIFY_PASSWORD_ERROR });
        return data;
    }
    catch(err) {
        dispatch({ type: TYPES.FORGOT_PASS_VERIFY_PASSWORD_ERROR });
        return err;
    }
}