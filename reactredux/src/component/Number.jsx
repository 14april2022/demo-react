import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/action";
import { DECREMENT, INCREMENT } from "../redux/type";

function Number() {
  const number = useSelector((state) => state.number);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Number = {number}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default Number;
