import React from "react";
import { useContext } from "react";
import { LoginContext } from "../App";
import { Navigate } from "react-router-dom";
function Private({ children }) {
  const { isLogin } = useContext(LoginContext);
  if (isLogin) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}

export default Private;
