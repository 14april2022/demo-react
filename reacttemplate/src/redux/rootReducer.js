import { combineReducers } from "redux";
import { courseReducer } from "./courseRedux/reducer";
import { loginReducer } from "./loginRedux/reducer";

export const rootReducer = combineReducers({
  login: loginReducer,
  course: courseReducer,
});
