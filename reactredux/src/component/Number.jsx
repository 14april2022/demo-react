import React from "react";
import { useSelector } from "react-redux";
function Number() {
  const number = useSelector((state) => state.number);
  return (
    <div>
      <h1>Number = {number}</h1>
    </div>
  );
}

export default Number;
