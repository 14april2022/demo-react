import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeUser } from "../redux/action";

function User() {
  const userName = useSelector((state) => state.userName);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>User , {userName}</h1>
      <button onClick={() => dispatch(changeUser())}>Change User name</button>
    </div>
  );
}

export default User;
