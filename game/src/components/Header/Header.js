import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () =>
<nav className="navbar navbar-default">
<div className="container-fluid">
  <div className="navbar-header">
    <Link className="navbar-brand" to="/">
      Clicky Game
    </Link>
  </div>
  <ul className="nav navbar-nav">
    <li
      className={
        window.location.pathname === "/" ||
        window.location.pathname === "/about"
          ? "active"
          : ""
      }
    >
      <Link to="/">About</Link>
    </li>
    <li
      className={window.location.pathname === "/discover" ? "active" : ""}
    >
      <Link to="/discover">Discover</Link>
    </li>
    <li className={window.location.pathname === "/search" ? "active" : ""}>
      <Link to="/search">Search</Link>
    </li>
  </ul>
</div>
</nav>;


export default Header;