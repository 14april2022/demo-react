import React, { createContext, useState } from "react";
import Table from "./Table";

export const FormContext = createContext();

function Main() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [tableData, setTableData] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(firstName, lastName);
    let formValue = {
      id: new Date().getTime().toString(),
      firstName,
      lastName,
    };
    setTableData([...tableData, formValue]);
    setFirstName("");
    setLastName("");
  }

  function handleDelete(id) {
    let filterTableDate = tableData.filter((item) => item.id !== id);
    setTableData(filterTableDate);
  }

  return (
    <FormContext.Provider value={{ handleDelete }}>
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

          <Table tableData={tableData} />

          {/* <table className="table">
          <thead>
            <tr>
              <th>Sr No</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => {
              const { id, firstName, lastName } = item;
              return (
                <tr key={id}>
                  <td> {index + 1} </td>
                  <td> {firstName} </td>
                  <td> {lastName} </td>
                  <td>
                    {" "}
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(id)}
                    >
                      Delete
                    </button>{" "}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table> */}
        </div>
      </div>
    </FormContext.Provider>
  );
}

export default Main;
