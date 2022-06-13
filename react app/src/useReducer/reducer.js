import { CHANGE_NAME, DECREMENT, INCREMENT } from "./type";

function reducer(state, action) {
  console.log("prev", state);
  console.log("action", action);
  if (action.type === INCREMENT) {
    return { ...state, number: state.number + 1 };
  }

  if (action.type === DECREMENT) {
    return { ...state, number: state.number - 1 };
  }

  if (action.type === CHANGE_NAME) {
    return { ...state, userName: "Kaushal" };
  }
  return state;
}

export default reducer;
