import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

export class NavBar extends Component {

  constructor(props) {
    super(props);
    console.log('NavBar --> constructor');
  }

  componentDidMount = () => {
    console.log('NavBar --> componentDidMount');
    console.log('--{ NavBar render cycle complete }--');
    console.log('');
  }

  componentDidUpdate = (prevProps, prevState) => {
    console.log('NavBar --> componentDidUpdate');
    console.log('--{ NavBar render cycle complete }--');
    console.log('');
  }

  render() {
    console.log('NavBar --> render');
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
