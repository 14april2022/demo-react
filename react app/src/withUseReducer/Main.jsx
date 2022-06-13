import React, { useState } from "react";
import "./style.css";
function Main() {
  const [number, setNumber] = useState(0);
  const [userName, setUserName] = useState("Nikunj");
  const [formValue, setFormValue] = useState("");
  const [isModal, setIsModal] = useState(false);

  function setIncrement() {
    setNumber(number + 1);
  }
  function setDecrement() {
    setNumber(number - 1);
  }
  function handleSubmit() {
    setUserName(formValue);
  }

  function openModal() {
    setIsModal(true);
  }

  function closeModal() {
    setIsModal(false);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 p-5 shadow text-center">
          <h2>Increment / Decrement</h2>
          <h3>Your Number : {number} </h3>
          <button className="btn btn-primary" onClick={setIncrement}>
            +
          </button>
          <button className="btn btn-danger" onClick={setDecrement}>
            -
          </button>
        </div>
        <div className="col-md-6 offset-md-3 p-5 my-5 shadow text-center">
          <h3> Welcome , {userName} </h3>
          <input
            type="text"
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
            placeholder="Enter Your Name"
          />
          <button className="btn btn-primary" onClick={handleSubmit}>
            Change Name
          </button>
        </div>
        <div className="col-md-6 offset-md-3 p-5 my-5 shadow text-center">
          <h3> Modal Box</h3>

          <button className="btn btn-primary" onClick={openModal}>
            Open Modal
          </button>
          {isModal ? (
            <div className="custom-modal">
              <h3>Notification</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Doloremque fugit enim quibusdam exercitationem ut excepturi,
                molestiae eos natus a quis? Doloribus possimus sit, laborum
                deserunt voluptates sed eaque nam voluptatum.
              </p>
              <button onClick={closeModal}>Close</button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Main;
