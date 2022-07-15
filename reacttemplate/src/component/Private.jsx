import React from "react";
import { useSelector } from "react-redux";

function Private({ children }) {
  const isLogin = useSelector((state) => state.login.isLogin);
  if (isLogin) {
    return children;
  } else {
    return <h1>Please Login</h1>;
  }
}

export default Private;
