import {
  COURSE_ADD_BEGIN,
  COURSE_ADD_ERROR,
  COURSE_ADD_SUCCESS,
  COURSE_FETCH_BEGIN,
  COURSE_FETCH_SUCCESS,
} from "./type";

const initialState = {
  allCourse: {},
  isLoading: false,
};

export const courseReducer = (state = initialState, action) => {
  if (action.type === COURSE_ADD_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === COURSE_ADD_SUCCESS) {
    return { ...state, isLoading: false };
  }

  if (action.type === COURSE_ADD_ERROR) {
    return { ...state, isLoading: false };
  }

  if (action.type === COURSE_FETCH_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === COURSE_FETCH_SUCCESS) {
    return { ...state, isLoading: false, allCourse: action.payload };
  }
  return state;
};
