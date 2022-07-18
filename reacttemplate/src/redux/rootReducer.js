import { combineReducers } from "redux";
import { loginReducer } from "./loginRedux/reducer";
import { signUpReducer } from "./signUpRedux/reducer";

export const rootReducer = combineReducers({
  login: loginReducer,
  signUp: signUpReducer,
});
