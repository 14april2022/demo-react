import axios from "axios";
import { LOGIN_BEGIN, LOGIN_ERROR, LOGIN_SUCCESS } from "./type";

export function login(value) {
  return (dispatch) => {
    dispatch({ type: LOGIN_BEGIN });
    axios
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCZfPOCcsYs7Ks6rNDa6a6MV9ZnVkiS6Nc`,
        value
      )
      .then((resp) => {
        if (resp.data.localId) {
          dispatch({ type: LOGIN_SUCCESS });
        }
      })
      .catch((err) => {
        dispatch({ type: LOGIN_ERROR });
        console.log(err);
      });
  };
}
