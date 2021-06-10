import React from "react";
import { useLocation, Link } from "react-router-dom";

const CommitteeMenu = ({ title = "", subMenu = [{ title: "", path: "" }] }) => {
  let loc = useLocation();

  return (
    <div className="col-sm-4 col-lg-3">
      <nav
        id="navbar-example3"
        className="navbar navbar-light bg-light flex-column mt-4"
      >
        <span className="navbar-brand">{title}</span>
        <nav className="nav nav-pills flex-column">
          {subMenu.map((v, i) => (
            <Link
              className={`nav-link ${loc.pathname === v.path ? "active" : ""}`}
              to={v.path}
            >
              {v.title}
            </Link>
          ))}
        </nav>
      </nav>
    </div>
  );
};

export default CommitteeMenu;
