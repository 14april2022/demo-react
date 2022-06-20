import React from "react";
import "./wrapper.css";
function Wrapper({ children }) {
  return (
    <div className="container-fluid move-up">
      <div className="container">{children}</div>
    </div>
  );
}

export default Wrapper;
