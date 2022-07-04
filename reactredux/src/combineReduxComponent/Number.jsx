import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../redux2/numberRedux/action";
function Number() {
  const number = useSelector((state) => state.number.currentNumber);
  const dispatch = useDispatch();
  return (
    <div>
      <h1> Current Number : {number} </h1>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}

export default Number;
