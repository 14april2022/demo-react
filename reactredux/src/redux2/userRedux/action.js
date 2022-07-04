import { CHANGE_USER } from "./type";

export const changeName = (value) => {
  return {
    type: CHANGE_USER,
    formValue: value,
  };
};
