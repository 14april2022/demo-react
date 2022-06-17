import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { data } from "../data";

function CourseDetail() {
  const { id } = useParams();
  const [singleCourseDetail, setSingleCourseDetail] = useState({});

  useEffect(() => {
    const singleCourse = data.find((item) => item.id == id);
    setSingleCourseDetail(singleCourse);
  }, []);

  return (
    <div className="container">
      <h1>Course Detail</h1>
      <hr />
      <div className="card p-5">
        <h2> {singleCourseDetail.name} </h2>
        <p> {singleCourseDetail.desp} </p>
      </div>
    </div>
  );
}

export default CourseDetail;
