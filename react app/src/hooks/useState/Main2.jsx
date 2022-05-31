import React, { useState } from "react";

function Main2() {
  const [isShowing, setIsShowing] = useState(true);
  return (
    <div className="container p-5">
      <h1>UseState</h1>
      <div className="btn-group">
        <button className="btn btn-success" onClick={() => setIsShowing(false)}>
          Hide
        </button>

        <button className="btn btn-warning" onClick={() => setIsShowing(true)}>
          Show
        </button>
        <button
          className="btn btn-danger"
          onClick={() => setIsShowing(!isShowing)}
        >
          {isShowing ? "Hide" : "Show"}
        </button>
      </div>
      <hr />
      {/* {isShowing ? <h1>Yes i am showing</h1> : null} */}
      {isShowing ? (
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
          autem consectetur nobis odit consequatur omnis corporis voluptate
          sapiente repellat ut cupiditate id, aut ea consequuntur, explicabo
          voluptatem quisquam totam doloribus.
        </p>
      ) : null}
    </div>
  );
}

export default Main2;
