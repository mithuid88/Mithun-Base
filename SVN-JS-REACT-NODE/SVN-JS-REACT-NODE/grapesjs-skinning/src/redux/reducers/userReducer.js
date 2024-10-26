import { TYPES } from "../actions/userAction";

const {
  LOGIN_USER_START,
  LOGIN_USER_COMPLETE,
  LOGIN_USER_ERROR,
  FORGOT_PASS_EMAIL_VERIFY_START,
  FORGOT_PASS_EMAIL_VERIFY_COMPLETE,
  FORGOT_PASS_EMAIL_VERIFY_ERROR,
  FORGOT_PASS_CHANGE_PASSWORD_START,
  FORGOT_PASS_CHANGE_PASSWORD_COMPLETE,
  FORGOT_PASS_CHANGE_PASSWORD_ERROR,
  LOGOUT_USER
} = TYPES;

const initialState = {
  token: localStorage.getItem("token"),
  email: localStorage.getItem("email"),
  isLoading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_START:
      return { ...state, isLoading: true };
    case LOGIN_USER_COMPLETE:
      return { ...state, token: action.data.token, email: action.data.email, isLoading: false };
    case LOGIN_USER_ERROR:
      return { ...state, isLoading: false };
    case FORGOT_PASS_EMAIL_VERIFY_START:
      return { ...state, email: action.data.email, isLoading: true };
    case FORGOT_PASS_EMAIL_VERIFY_COMPLETE:
      return { ...state, isLoading: false };
    case FORGOT_PASS_EMAIL_VERIFY_ERROR:
      return { ...state, isLoading: false };
    case FORGOT_PASS_CHANGE_PASSWORD_START:
      return { ...state, email: action.data.email, password: action.data.password, isLoading: true }
    case FORGOT_PASS_CHANGE_PASSWORD_COMPLETE:
      return { ...state, isLoading: false }
    case FORGOT_PASS_CHANGE_PASSWORD_ERROR:
      return { ...state, isLoading: false }
    case LOGOUT_USER:
      return { ...state, token: null, email: null };
    default:
      return state;
  }
};

export default userReducer;