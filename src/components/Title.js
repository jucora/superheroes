import React from 'react';
import { NavLink, HashRouter as Router } from 'react-router-dom';

const Title = () => (
  <Router>
    <div className="title row">
      <header>
        <h1 >SUPERHEROES</h1>
        <div  className="title-subtitle">
          Search and get information about your favorite superhero!
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
  </Router>
);

export default Title;
