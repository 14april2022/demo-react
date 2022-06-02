import React, { useState } from "react";

function Main() {
  // 1 => create a state to store the initialValue of the input
  const [firstName, setFirstName] = useState("");

  function handleFirstName(e) {
    setFirstName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(firstName);
  }
  return (
    <div className="container">
      <div className="col-md-6 offset-md-3 p-5 shadow my-4">
        <h1 className="text-center">Form Handling</h1>
        <h3>Name : {firstName} </h3>
        <form action="">
          <div className="mb-3">
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              id="fname"
              className="form-control"
              value={firstName}
              onChange={handleFirstName}
            />
          </div>
          <button className="btn btn-primary w-100" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Main;
