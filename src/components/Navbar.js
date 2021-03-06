import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";


function Navbar() {
  return (
    <nav className="navbar justify-content-center transparent">
      <Link className="navbar-brand" to="/">
        Rachael McIlhagga     │
      </Link>
      <div>
        <ul className="nav">
          <li className="link">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
          </li>
          {/* <li className="link">
            <Link
              to="/home/#projects"
              className={
                window.location.pathname === "/" || window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }
              
            >
              Projects
            </Link>
          </li> */}
        </ul>
      </div>

    </nav>
  );
}

export default Navbar;