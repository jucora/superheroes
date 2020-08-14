import React from "react";
import { NavLink, HashRouter as Router } from "react-router-dom";

const Title = () => (
  <Router>
    <div className="title row">
      <header>
        <h1 data-testid="mainTitle">SUPERHEROES</h1>
        <div data-testid="title-subtitle" className="title-subtitle">
          Search and get information about your favorite superhero!
        </div>
        <div>
          <NavLink
            data-testid="listLink"
            className="nav-link"
            activeClassName="nav-link-active"
            exact
            to="/"
          >
            List
          </NavLink>
          <NavLink
            data-testid="aboutLink"
            className="nav-link"
            activeClassName="nav-link-active"
            to="/about"
          >
            About
          </NavLink>
        </div>
      </header>
    </div>
  </Router>
);

export default Title;
