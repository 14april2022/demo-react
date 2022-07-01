import React from "react";
import { useSelector } from "react-redux";

function User() {
  const userName = useSelector((state) => state.userName);

  return (
    <div>
      <h1>User , {userName}</h1>
    </div>
  );
}

export default User;
