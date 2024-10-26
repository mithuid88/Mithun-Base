import { combineReducers } from "redux";

import pageReducer from "./pageReducer";
import userReducer from "./userReducer";

export default combineReducers({
  pageStore: pageReducer,
  userStore: userReducer
});
