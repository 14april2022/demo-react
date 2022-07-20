import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCourse } from "../redux/courseRedux/action";

function AddCourse() {
  const [formValue, setFormValue] = useState({
    course_name: "",
    course_duration: "",
    course_price: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  }
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addCourse(formValue, setFormValue));
  }
  return (
    <>
      <div className="row">
        <div className="col-md-6 py-5 px-3 shadow offset-md-3">
          <h5 className="text-center">Add Course</h5>
          <hr />
          <form role="form">
            <label>Course Name</label>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="course_name"
                placeholder="Course Name"
                value={formValue.course_name}
                onChange={handleChange}
              />
            </div>
            <label>Course Duration</label>
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="Course Duration"
                name="course_duration"
                value={formValue.course_duration}
                onChange={handleChange}
              />
            </div>
            <label>Course Price</label>
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="Course Price"
                name="course_price"
                value={formValue.course_price}
                onChange={handleChange}
              />
            </div>
            <div className="text-center">
              <button
                type="button"
                className="btn bg-gradient-info w-100 mt-4 mb-0"
                onClick={handleSubmit}
              >
                Add Course
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddCourse;
