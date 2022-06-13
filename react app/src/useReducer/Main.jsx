import React, { useReducer } from "react";
import reducer from "./reducer";
import { CHANGE_NAME, DECREMENT, INCREMENT } from "./type";

function Main() {
  const initialState = {
    number: 0,
    userName: "Nikunj",
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="col-md-6 offset-md-3 p-5 shadow text-center">
      <h2>Increment / Decrement</h2>
      <h3>Your Number : {state.number} </h3>
      <button
        className="btn btn-primary"
        onClick={() => dispatch({ type: INCREMENT })}
      >
        +
      </button>
      <button
        className="btn btn-danger"
        onClick={() => dispatch({ type: DECREMENT })}
      >
        -
      </button>
      <hr />
      <h3>UserName , {state.userName}</h3>
      <button onClick={() => dispatch({ type: CHANGE_NAME })}>
        Change Name
      </button>
    </div>
  );
}

export default Main;
