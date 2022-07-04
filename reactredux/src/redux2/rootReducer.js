import { combineReducers } from "redux";
import { numberReducer } from "./numberRedux/reducer";
import { userReducer } from "./userRedux/reducer";

export const rootReducer = combineReducers({
  number: numberReducer,
  user: userReducer,
});
