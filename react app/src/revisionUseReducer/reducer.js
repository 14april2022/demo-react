import { CHANGE_NAME, DECREMENT, INCREMENT } from "./type";

export const reducer = (state, action) => {
  console.log(action);
  if (action.type === INCREMENT) {
    return { ...state, number: state.number + 1 };
  }
  if (action.type === DECREMENT) {
    return { ...state, number: state.number - 1 };
  }

  if (action.type === CHANGE_NAME) {
    return { ...state, userName: action.payload };
  }
  return state;
};
