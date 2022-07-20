import axios from "axios";
import {
  COURSE_ADD_BEGIN,
  COURSE_ADD_SUCCESS,
  COURSE_FETCH_BEGIN,
  COURSE_FETCH_SUCCESS,
} from "./type";

export const addCourse = (value, setFormValue) => {
  return (dispatch) => {
    dispatch({ type: COURSE_ADD_BEGIN });
    axios
      .post(
        `https://courses-d276b-default-rtdb.firebaseio.com/courses.json`,
        value
      )
      .then((resp) => {
        dispatch({ type: COURSE_ADD_SUCCESS });
        setFormValue({
          course_name: "",
          course_duration: "",
          course_price: "",
        });
      })
      .catch((err) => console.log(err));
  };
};

export const getAllCourses = () => {
  return (dispatch) => {
    dispatch({ type: COURSE_FETCH_BEGIN });

    axios
      .get(`https://courses-d276b-default-rtdb.firebaseio.com/courses.json`)
      .then((resp) => {
        console.log(resp);
        if (resp.data) {
          dispatch({ type: COURSE_FETCH_SUCCESS, payload: resp.data });
        }
      })
      .catch((err) => console.log(err));
  };
};
