import React from "react";
import { navLink } from "../assests/navLink";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
function Aside() {
  const isLogin = useSelector((state) => state.login.isLogin);

  if (!isLogin) {
    return false;
  }

  return (
    <aside
      className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3"
      id="sidenav-main"
      style={{ background: "white" }}
    >
      <div className="sidenav-header">
        <i
          className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none iconSidenav"
          aria-hidden="true"
        />
        <a
          className="navbar-brand m-0"
          href=" https://demos.creative-tim.com/soft-ui-dashboard/pages/dashboard.html "
          target="_blank"
        >
          <img
            src="../assets/img/logo-ct-dark.png"
            className="navbar-brand-img h-100"
            alt="main_logo"
          />
          <span className="ms-1 font-weight-bold">Soft UI Dashboard</span>
        </a>
      </div>
      <hr className="horizontal dark mt-0" />
      <div
        className="collapse navbar-collapse w-auto"
        id="sidenav-collapse-main"
        style={{ height: "auto" }}
      >
        <ul className="navbar-nav">
          {navLink.map((item) => {
            return (
              <li className="nav-item">
                <NavLink className="nav-link iconSidenav" to={item.url}>
                  <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                    {" "}
                    {item.icon}{" "}
                  </div>
                  <span className="nav-link-text ms-1"> {item.text} </span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}

export default Aside;
