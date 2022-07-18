import { SIGNUP_BEGIN, SIGNUP_ERROR, SIGNUP_SUCCESS } from "../loginRedux/type";

const initialState = {
  email: "",
  password: "",
  isLoading: false,
  isLogin: false,
};
export const signUpReducer = (state = initialState, action) => {
  if (action.type === SIGNUP_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === SIGNUP_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      isLogin: true,
    };
  }
  if (action.type === SIGNUP_ERROR) {
    return {
      ...state,
      isLoading: false,
    };
  }
  return state;
};
