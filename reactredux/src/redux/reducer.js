import { CHANGE_USER, DECREMENT, INCREMENT } from "./type";

const initialState = {
  number: 0,
  userName: "Raj",
};

const reducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return { ...state, number: state.number + 1 };
  }

  if (action.type === DECREMENT) {
    return { ...state, number: state.number - 1 };
  }

  if (action.type === CHANGE_USER) {
    return { ...state, userName: "Alfiya" };
  }
  return state;
};

export default reducer;
