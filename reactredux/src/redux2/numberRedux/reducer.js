import { INCREMENT } from "./type";

const initialState = {
  currentNumber: 0,
};

export const numberReducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return { ...state, currentNumber: state.currentNumber + 1 };
  }
  return state;
};
