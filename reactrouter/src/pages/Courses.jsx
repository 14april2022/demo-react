import React from "react";
import { data } from "../data";
import { Link } from "react-router-dom";
function Courses() {
  return (
    <div className="container">
      <h1 className="mb-5">Your Courses</h1>
      {data.map((item) => {
        const { id, name } = item;
        return (
          <div key={id} className="card mb-3 p-3">
            <h5> {name} </h5>
            <Link to={`/courses/${id}`}> View </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Courses;
