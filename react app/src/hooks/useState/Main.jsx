import React, { useState } from "react";

function Main() {
  // first Value will be variable
  // second Value will be a function
  const [firstName, setFirstName] = useState("Nikunj");
  const [city, setCity] = useState("Surat");
  const [lastName, setLastName] = useState("Patel");
  const [number, setNumber] = useState(0);
  console.log("My Name is ", firstName);

  function handleAlert() {
    alert("Hello i am alert");
  }

  function handleFirstName() {
    setFirstName("Krishna");
  }

  function inc() {
    setNumber(number + 1);
  }

  function dec() {
    if (number > 0) {
      setNumber(number - 1);
    } else {
      alert("Negative Is Not allow");
    }
  }

  return (
    <div className="container p-5">
      <h2 className="text-center">UseState</h2>
      <div className="col-md-6 offset-md-3">
        <div className="card text-center">
          <div className="card-body">
            <h3 className="center"> {number} </h3>
          </div>
          <div className="card-footer">
            <div className="btn-group">
              <button className="btn btn-primary" onClick={inc}>
                +
              </button>
              <button className="btn btn-warning" onClick={dec}>
                -
              </button>
              {/* <button
                className="btn btn-primary"
                onClick={() => setNumber(number + 1)}
              >
                +
              </button>
              <button
                className="btn btn-warning"
                onClick={() => setNumber(number - 1)}
              >
                -
              </button> */}
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-body">
            <h2> {firstName} </h2>
            <h2> City : {city} </h2>
            <h3> Last Name : {lastName} </h3>
          </div>
          <div className="card-footer">
            <button
              className="btn btn-dark"
              onClick={() => setLastName("Hello World")}
            >
              Change Last Name
            </button>
            <button className="btn btn-primary" onClick={handleFirstName}>
              Change
            </button>
            <button
              className="btn btn-warning"
              onClick={() => setCity("Daman")}
            >
              Change City
            </button>
            {/* <button
              className="btn btn-primary"
              onClick={() => alert("Hello World")}
            >
              Change
            </button> */}
            {/* <button className="btn btn-primary" onClick={handleAlert}>
              Change
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
