import React, { useState } from "react";

function Main() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [tableData, setTableData] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(firstName, lastName);
    let formValue = {
      firstName,
      lastName,
    };
    setTableData([...tableData, formValue]);
    setFirstName("");
    setLastName("");
  }

  console.log(tableData);

  return (
    <div className="container">
      <div className="col-md-6 offset-md-3 p-5 shadow my-4">
        <h1 className="text-center h4">Multiple Form Handling</h1>
        <form action="">
          <div className="mb-3">
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              id="fname"
              className="form-control"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              className="form-control"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <button className="btn btn-primary w-100" onClick={handleSubmit}>
            Submit
          </button>
        </form>

        <hr />
        <h5>User Data</h5>

        <table className="table">
          <thead>
            <tr>
              <th>Sr No</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => {
              const { firstName, lastName } = item;
              return (
                <tr>
                  <td> {index + 1} </td>
                  <td> {firstName} </td>
                  <td> {lastName} </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Main;
