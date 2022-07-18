import { SIGNUP_BEGIN, SIGNUP_ERROR, SIGNUP_SUCCESS } from "../loginRedux/type";
import axios from "axios";
export function signUp(value) {
  return (dispatch) => {
    dispatch({ type: SIGNUP_BEGIN });
    axios
      .post(
        `
    https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCZfPOCcsYs7Ks6rNDa6a6MV9ZnVkiS6Nc
    `,
        value
      )
      .then((resp) => {
        dispatch({ type: SIGNUP_SUCCESS });
        console.log(resp);
      })
      .catch((err) => {
        dispatch({ type: SIGNUP_ERROR });
        console.log(err);
      });
  };
}
