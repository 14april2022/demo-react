import React, { useEffect, useState } from "react";
import Img from "./Img";

function Main() {
  const [isShowing, setIsShowing] = useState(false);
  const [number, setNumber] = useState(0);
  useEffect(() => {
    console.log("Main component has been Mounted");
  }, [number, isShowing]);
  return (
    <div className="container p-5">
      <h1>Main Component</h1>
      <hr />
      <h1> {number} </h1>
      <button onClick={() => setNumber(number + 1)}>+</button>
      <button onClick={() => setNumber(number - 1)}>-</button>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() => setIsShowing(!isShowing)}
      >
        Hide/Show
      </button>
      {isShowing ? <Img /> : null}
      {/* <Img /> */}
    </div>
  );
}

export default Main;
