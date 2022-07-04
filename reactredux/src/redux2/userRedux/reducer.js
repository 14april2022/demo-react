import { CHANGE_USER } from "./type";

const initialState = {
  username: "shalu",
};

export const userReducer = (state = initialState, action) => {
  if (action.type === CHANGE_USER) {
    return {
      ...state,
      username: action.formValue,
    };
  }
  return state;
};
