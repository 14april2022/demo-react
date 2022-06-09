import React from "react";
import TableRow from "./TableRow";

function Table({ tableData }) {
  return (
    <table className="table">
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
            <TableRow
              id={id}
              firstName={firstName}
              lastName={lastName}
              index={index}
              key={index}
            />
            // <tr key={id}>
            //   <td> {index + 1} </td>
            //   <td> {firstName} </td>
            //   <td> {lastName} </td>
            //   <td>
            //     {" "}
            //     <button
            //       className="btn btn-danger"
            //       onClick={() => handleDelete(id)}
            //     >
            //       Delete
            //     </button>{" "}
            //   </td>
            // </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
