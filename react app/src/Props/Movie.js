import React from "react";

function Movie({ movieName, desp }) {
  //   const { movieName, desp } = props;
  return (
    <div className="col-md-4 mb-5">
      <div className="card shadow">
        <div className="card-body">
          <h5> {movieName} </h5>
          <p> {desp} </p>
          <button className="btn btn-primary">View Now</button>
        </div>
      </div>
    </div>
    // <div className="col-md-4 mb-5">
    //   <div className="card shadow">
    //     <div className="card-body">
    //       <h5> {props.movieName} </h5>
    //       <p> {props.desp} </p>
    //       <button className="btn btn-primary">View Now</button>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Movie;
