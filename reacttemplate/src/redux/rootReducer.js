import { combineReducers } from "redux";
import { loginReducer } from "./loginRedux/reducer";

export const rootReducer = combineReducers({ login: loginReducer });
