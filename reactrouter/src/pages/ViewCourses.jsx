import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Wrapper from "../component/Wrapper";

function ViewCourses() {
  const [courses, setCourses] = useState({});

  useEffect(() => {
    fetch(`https://react-crud-34884-default-rtdb.firebaseio.com/courses.json`)
      .then((resp) => resp.json())
      .then((data) => setCourses(data));
  }, []);

  console.log(Object.keys(courses));

  return (
    <Wrapper>
      <h2>All Courses</h2>
      <table className="table">
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
          {Object.keys(courses).map((item, index) => {
            const { courseName, courseDuration, coursePrice } = courses[item];
            return (
              <tr>
                <td> {index + 1} </td>
                <td> {courseName} </td>
                <td> {courseDuration} Month </td>
                <td> {coursePrice} </td>
                <td>
                  <button>Delete</button> <button>Update</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Wrapper>
  );
}

export default ViewCourses;
