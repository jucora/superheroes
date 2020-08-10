import React from "react";
import { NavLink } from "react-router-dom";

function Title() {
  return (
    <div className="Title">
      <header>
        <h1>SUPERHEROES</h1>
        <div className="Title-Subtitle">
          "Search and get information about your favorite superhero"
        </div>
        <div>
          <NavLink
            className="nav-link"
            activeClassName="nav-link-active"
            exact
            to="/"
          >
            List
          </NavLink>
          <NavLink
            className="nav-link"
            activeClassName="nav-link-active"
            to="/about"
          >
            About
          </NavLink>
        </div>
      </header>
    </div>
  );
}

export default Title;
