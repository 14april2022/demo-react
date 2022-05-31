import React from "react";
import "./header.css";
function Header() {
  // inline , internal , external

  const header1 = { color: "blue", fontSize: "50px" };
  const header2 = { color: "red", backgroundColor: "black" };
  return (
    <div>
      <p className="bg-black">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro alias
        tenetur natus sunt a labore adipisci illum ex consequuntur eius
        repellendus, velit unde? Sit, incidunt quos harum pariatur cupiditate
        voluptatem!
      </p>
      <h1 style={header1}>Welcome</h1>
      <h1 style={header2}>I am Header</h1>
      <p style={{ color: "yellow" }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam et
        dolorum nemo, nulla, unde eveniet dolor ipsum aspernatur tempore
        adipisci nam accusantium repudiandae. Quam dolor eos dolore esse ratione
        quae.
      </p>
    </div>
  );
}

export default Header;
