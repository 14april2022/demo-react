import React from "react";
import Aside from "./Aside";
import Nav from "./Nav";

function Main({ children }) {
  return (
    <>
      <Aside />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
        <Nav />
        <div className="container-fluid py-4">{children}</div>
      </main>
    </>
  );
}

export default Main;
