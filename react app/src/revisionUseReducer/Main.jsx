import React, { useReducer, useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import { reducer } from "./reducer";
import { CHANGE_NAME, DECREMENT, INCREMENT } from "./type";
function Main() {
  const initialState = {
    number: 0,
    userName: "Kaushal",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const [formValue, setFormValue] = useState(state.userName);

  return (
    <div className="col-md-6 offset-md-3 p-5 shadow text-center">
      <h2>Increment / Decrement</h2>
      <h3>Your Number : {state.number} </h3>
      <Button
        variant="contained"
        color="success"
        onClick={() => dispatch({ type: INCREMENT })}
      >
        +{/* <AddIcon></AddIcon> */}
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch({ type: DECREMENT })}
      >
        -
      </Button>
      <hr />
      <div className="card">
        <div className="card-header">
          <h2>UserName, {state.userName} </h2>
        </div>
        <div className="card-body">
          <input
            type="text"
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
          />
        </div>
        <div className="card-footer">
          <Button
            onClick={() => dispatch({ type: CHANGE_NAME, payload: formValue })}
          >
            Edit Name
          </Button>
        </div>
      </div>
    </div>
    // useMemo , useRef
  );
}

export default Main;
