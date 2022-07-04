import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../redux2/userRedux/action";

function User() {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.username);

  const [formValue, setFormValue] = useState("");

  return (
    <div>
      <h1> Current User : {username} </h1>
      <input type="text" onChange={(e) => setFormValue(e.target.value)} />
      <button onClick={() => dispatch(changeName(formValue))}>
        Change Name
      </button>
    </div>
  );
}

export default User;
