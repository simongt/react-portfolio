import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <div className="menu-container">
        <ul className="header-left">
          <li>
            {/* Home component is linked to top left image */}
            <NavLink to="/">
              <img src="/img/sgt-logo.png" alt="SGT" />
            </NavLink>
          </li>
        </ul>
        <ul className="header-right">
          <li>
            <NavLink to="/bits">
              <span>Bits</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/pieces">
              <span>Pieces</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/human">
              <span>Human</span>
            </NavLink>
          </li>
        </ul>
      </div>
    )
  }
}

export default NavBar;
