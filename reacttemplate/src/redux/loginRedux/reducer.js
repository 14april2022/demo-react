import { act } from "react-dom/test-utils";
import {
  LOGIN_BEGIN,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP_BEGIN,
  SIGNUP_ERROR,
  SIGNUP_SUCCESS,
} from "./type";

function getLocalStorageData() {
  const isLogin = localStorage.getItem("login");
  if (isLogin) {
    return Boolean(localStorage.getItem("login"));
  } else {
    return false;
  }
}

getLocalStorageData();

const initialState = {
  isLogin: getLocalStorageData(),
  isLoading: false,
};

export const loginReducer = (state = initialState, action) => {
  if (action.type === LOGIN_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === LOGIN_SUCCESS) {
    localStorage.setItem("login", "true");

    return { ...state, isLogin: true, isLoading: false };
  }

  if (action.type === LOGIN_ERROR) {
    return { ...state, isLoading: false };
  }

  if (action.type === LOGOUT) {
    localStorage.removeItem("login");
    return { ...state, isLogin: false };
  }

  if (action.type === SIGNUP_BEGIN) {
    return { ...state };
  }

  if (action.type === SIGNUP_SUCCESS) {
    return { ...state };
  }

  if (action.type === SIGNUP_ERROR) {
    return { ...state };
  }

  return state;
};
