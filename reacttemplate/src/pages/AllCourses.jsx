import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../redux/courseRedux/action";

function AllCourses() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCourses());
  }, []);

  const isLoading = useSelector((state) => state.course.isLoading);
  const allCourse = useSelector((state) => state.course.allCourse);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="table-responsive p-0">
      <table className="table align-items-center mb-0">
        <thead>
          <tr>
            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
              Sr No
            </th>
            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
              Courses
            </th>
            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
              Price
            </th>
            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {allCourse &&
            Object.keys(allCourse).map((item, index) => {
              const { course_duration, course_name, course_price } =
                allCourse[item];

              return (
                <tr>
                  <td> {index + 1} </td>
                  <td> {course_name} </td>
                  <td className="align-middle text-center text-sm">
                    {" "}
                    {course_price}{" "}
                  </td>
                  <td className="align-middle text-center">
                    <button className="btn btn-primary">View</button>
                    <button className="btn btn-secondary ms-3">Delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default AllCourses;
