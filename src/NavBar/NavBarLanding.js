import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Flip, Fade } from 'react-reveal';

export class NavBarLanding extends Component {

  constructor(props) {
    super(props);
    console.log('NavBarLanding --> constructor');
  }

  componentDidMount = () => {
    console.log('NavBarLanding --> componentDidMount');
    console.log('--{ NavBarLanding render cycle complete }--');
    console.log('');
  }

  componentDidUpdate = (prevProps, prevState) => {
    console.log('NavBarLanding --> componentDidUpdate');
    console.log('--{ NavBarLanding render cycle complete }--');
    console.log('');
  }

  render() {
    console.log('NavBarLanding --> render');
    return (
      <div className="menu-container">
        <ul className="header-left">
          <li>
            {/* Home component is linked to top left image */}
            <NavLink to="/">
              <Flip left duration={1000} delay={3500}>
                <img src="/img/sgt-logo.png" alt="SGT" />
              </Flip>
            </NavLink>
          </li>
        </ul>
        <ul className="header-right">
          <li>
            <NavLink to="/bits">
              <Fade top duration={1000} delay={3750}>
                <span>Bits</span>
              </Fade>
            </NavLink>
          </li>
          <li>
            <NavLink to="/pieces">
              <Fade top duration={1000} delay={4000}>
                <span>Pieces</span>
              </Fade>
            </NavLink>
          </li>
          <li>
            <NavLink to="/human">
              <Fade top duration={1000} delay={4250}>
                <span>Human</span>
              </Fade>
            </NavLink>
          </li>
        </ul>
      </div>
    )
  }
}

export default NavBarLanding;
