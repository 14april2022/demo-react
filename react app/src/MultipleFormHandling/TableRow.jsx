import React, { useContext } from "react";
import { FormContext } from "./Main";

function TableRow({ id, index, firstName, lastName }) {
  const { handleDelete } = useContext(FormContext);
  console.log(handleDelete);
  return (
    <tr key={id}>
      <td> {index + 1} </td>
      <td> {firstName} </td>
      <td> {lastName} </td>
      <td>
        <button className="btn btn-danger" onClick={() => handleDelete(id)}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default TableRow;
