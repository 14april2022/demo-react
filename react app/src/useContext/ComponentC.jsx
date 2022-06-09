import React, { useContext } from "react";
import { UserContext } from "./Main";

function ComponentC() {
  const data = useContext(UserContext);
  console.log(data);
  return (
    <div>
      <h1>User Name : {data.userName} </h1>
    </div>
  );
}

export default ComponentC;
