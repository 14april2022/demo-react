import { CHANGE_USER, DECREMENT, INCREMENT } from "./type";

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const changeUser = () => {
  return {
    type: CHANGE_USER,
  };
};
