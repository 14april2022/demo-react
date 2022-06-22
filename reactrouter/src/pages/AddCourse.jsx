import React from "react";
import { useState } from "react";
import Wrapper from "../component/Wrapper";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";

function AddCourse() {
  const [formValue, setFormValue] = useState({
    courseName: "",
    coursePrice: "",
    courseDuration: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const notify = (mess) => toast.success(mess);
  const navigate = useNavigate();

  // value , name = object key

  function handleChange(e) {
    // console.log(e.target.name, e.target.value);
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    axios({
      method: "post",
      url: `https://react-crud-34884-default-rtdb.firebaseio.com/courses.json`,
      data: formValue,
    })
      .then((resp) => {
        if (resp.status === 200) {
          notify("Course has been Added");
          setIsLoading(false);
          setFormValue({ courseName: "", coursePrice: "", courseDuration: "" });
          navigate("/view-courses");
        }
      })
      .catch((err) => console.log(err));
    // fetch(`https://react-crud-34884-default-rtdb.firebaseio.com/courses.json`, {
    //   method: "POST",
    //   body: JSON.stringify(formValue),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // })
    //   .then((resp) => resp.json())
    //   .then((data) => console.log(data));

    // axios
  }

  return (
    <Wrapper>
      <div className="row py-5">
        <ToastContainer />
        <div className="col-md-6 p-3 offset-md-3 shadow">
          <form action="">
            <h3 onClick={notify}>Add Course</h3>
            <div className="my-3">
              <input
                type="text"
                className="form-control"
                placeholder="Course Name"
                value={formValue.courseName}
                name="courseName"
                onChange={handleChange}
              />
            </div>
            <div className="row">
              <div className="my-3 col-6">
                <input
                  type="number"
                  className="form-control"
                  placeholder="course price"
                  value={formValue.coursePrice}
                  name="coursePrice"
                  onChange={handleChange}
                />
              </div>
              <div className="my-3 col-6">
                <input
                  type="number"
                  className="form-control"
                  placeholder="course duration"
                  value={formValue.courseDuration}
                  name="courseDuration"
                  onChange={handleChange}
                />
              </div>
            </div>
            <button className="btn btn-primary w-100" onClick={handleSubmit}>
              {isLoading ? "Loading..." : "Add Course"}
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
}

export default AddCourse;
