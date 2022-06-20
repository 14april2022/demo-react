import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../App";
import Wrapper from "../component/Wrapper";

function Login() {
  const { setIsLogin } = useContext(LoginContext);
  const navigate = useNavigate();
  function login() {
    setIsLogin(true);
    navigate("/courses");
  }
  return (
    <Wrapper>
      <h1>Login</h1>
      <button onClick={login}>Login</button>
    </Wrapper>
  );
}

export default Login;
