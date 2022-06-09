import React, { createContext, useState } from "react";
import ComponentA from "./ComponentA";

export const UserContext = createContext();

function Main() {
  const [userName, setUserName] = useState("Alfiya");
  return (
    <UserContext.Provider value={{ userName }}>
      <ComponentA />
    </UserContext.Provider>
  );
}

export default Main;
