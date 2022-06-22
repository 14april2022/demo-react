import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../App";
function Nav() {
  const { isLogin, setIsLogin } = useContext(LoginContext);
  const navigate = useNavigate();
  function handleLogout() {
    setIsLogin(false);
    navigate("/login");
  }

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" href="#">
          Logo
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/courses" className="nav-link">
                Courses
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/add-course" className="nav-link">
                Add course
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/view-courses" className="nav-link">
                View All Courses
              </Link>
            </li>
            {isLogin ? (
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
