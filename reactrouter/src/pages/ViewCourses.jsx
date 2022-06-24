import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../component/Wrapper";
import TablePlaceholder from "./TablePlaceholder";

function ViewCourses() {
  const [courses, setCourses] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // get all courses
  function getAllCourses() {
    fetch(`https://react-crud-34884-default-rtdb.firebaseio.com/courses.json`)
      .then((resp) => resp.json())
      .then((data) => {
        setIsLoading(false);
        setCourses(data);
      });
  }

  useEffect(() => {
    setIsLoading(true);
    getAllCourses();
  }, []);

  // delete single course
  function deleteSingleCourse(id) {
    fetch(
      `https://react-crud-34884-default-rtdb.firebaseio.com/courses/${id}.json`,
      {
        method: "Delete",
      }
    )
      .then((data) => data.json())
      .then((data) => getAllCourses());
  }

  const navigate = useNavigate();

  const [formValue, setFormValue] = useState({
    courseName: "",
    courseDuration: "",
    coursePrice: "",
  });

  const [updateId, setUpdateId] = useState("");
  const [isUpdated, setIsUpdated] = useState(false);

  function setUpdateValue(id, courseName, courseDuration, coursePrice) {
    setFormValue({
      courseName: courseName,
      courseDuration: courseDuration,
      coursePrice: coursePrice,
    });
    setUpdateId(id);
  }

  function updateCourse(e) {
    e.preventDefault();
    fetch(
      `https://react-crud-34884-default-rtdb.firebaseio.com/courses/${updateId}.json`,
      {
        method: "PATCH",
        body: JSON.stringify(formValue),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((response) => response.json())
      .then((json) => {
        getAllCourses();
        setIsUpdated(true);
      });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  }

  return (
    <Wrapper>
      <div className="modal" tabIndex={-1} id="update-course">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Course</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form action="">
                <input
                  type="text"
                  className="form-control my-3"
                  placeholder="course name"
                  name="courseName"
                  value={formValue.courseName}
                  onChange={handleChange}
                />
                <input
                  type="number"
                  className="form-control my-3"
                  placeholder="course duration"
                  name="courseDuration"
                  value={formValue.courseDuration}
                  onChange={handleChange}
                />
                <input
                  type="number"
                  className="form-control my-3"
                  placeholder="course-price"
                  name="coursePrice"
                  value={formValue.coursePrice}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-primary w-100"
                  onClick={updateCourse}
                  data-bs-dismiss="modal"
                  // data-bs-dismiss={isUpdated ? "modal" : null}
                >
                  Update
                </button>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center">
        <h2>All Courses</h2>
        <button onClick={() => navigate("/add-course")}>Add Course</button>
      </div>

      <div className="table-responsive">
        <table className="table ">
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Course Name</th>
              <th>Course Duration</th>
              <th>Course Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {isLoading && <TablePlaceholder />}
            {Object.keys(courses).map((item, index) => {
              const { courseName, courseDuration, coursePrice } = courses[item];
              return (
                <tr key={index}>
                  <td> {index + 1} </td>
                  <td> {courseName} </td>
                  <td> {courseDuration} Month </td>
                  <td> {coursePrice} </td>
                  <td>
                    <button onClick={() => deleteSingleCourse(item)}>
                      Delete
                    </button>{" "}
                    <button
                      data-bs-toggle="modal"
                      data-bs-target="#update-course"
                      onClick={() =>
                        setUpdateValue(
                          item,
                          courseName,
                          courseDuration,
                          coursePrice
                        )
                      }
                    >
                      Update
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
}

export default ViewCourses;
