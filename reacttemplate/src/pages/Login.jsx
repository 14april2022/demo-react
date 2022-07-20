import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/loginRedux/action";
import { Link, Navigate } from "react-router-dom";

function Login() {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const isLogin = useSelector((state) => state.login.isLogin);
  const isLoading = useSelector((state) => state.login.isLoading);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  }

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(login(formValue));
  }

  if (isLogin) {
    return <Navigate to="/" />;
  }
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
            <div className="card card-plain mt-8">
              <div className="card-header pb-0 text-left bg-transparent">
                <h3 className="font-weight-bolder text-info text-gradient">
                  Welcome back
                </h3>
                <p className="mb-0">Enter your email and password to sign in</p>
              </div>
              <div className="card-body">
                <form role="form">
                  <label>Email</label>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email"
                      value={formValue.email}
                      onChange={handleChange}
                    />
                  </div>
                  <label>Password</label>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Password"
                      name="password"
                      value={formValue.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="text-center">
                    <button
                      type="button"
                      className="btn bg-gradient-info w-100 mt-4 mb-0"
                      onClick={handleSubmit}
                    >
                      {isLoading ? "login..." : "Sign in"}
                    </button>
                  </div>
                </form>
              </div>
              <div className="card-footer text-center pt-0 px-lg-2 px-1">
                <p className="mb-4 text-sm mx-auto">
                  Don't have an account?
                  <Link
                    to="/sign-up"
                    className="text-info text-gradient font-weight-bold"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="oblique position-absolute top-0 h-100 d-md-block d-none me-n8">
              <div
                className="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6"
                style={{
                  backgroundImage:
                    'url("../assets/img/curved-images/curved6.jpg")',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
