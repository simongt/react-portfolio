import React, { Component } from "react";
import { 
  Route,
  NavLink,
  HashRouter as Router,
  Switch
} from "react-router-dom";
import { Flip, Fade } from 'react-reveal';

import Landing from "../Landing";
import Home from "../Home";
import Bits from "../Bits";
import Pieces from "../Pieces";
import Human from "../Human";

import "./style.css";
import "./responsive.css";

class Main extends Component {
  render() {
    return (
      <Router>
        <div className="main">
          <div className="menu-container">
            <ul className="header-left">
              <li>
                {/* Home component is linked to top left image */}
                <NavLink to="/home">
                  <Flip left duration={1000} delay={3500}>
                  {/* <Flip left duration={1000}> */}
                    <img src="/img/sgt-logo.png" alt="SGT" />
                  </Flip>
                </NavLink>
              </li>
            </ul>
            <ul className="header-right">
              <li>
                <NavLink to="/bits">
                  <Fade top duration={1000} delay={3750}>
                  {/* <Fade top duration={1000} delay={250}> */}
                    <span>Bits</span>
                  </Fade>
                </NavLink>
              </li>
              <li>
                <NavLink to="/pieces">
                  <Fade top duration={1000} delay={4000}>
                  {/* <Fade top duration={1000} delay={500}> */}
                    <span>Pieces</span>
                  </Fade>
                </NavLink>
              </li>
              <li>
                <NavLink to="/human">
                  <Fade top duration={1000} delay={4250}>
                  {/* <Fade top duration={1000} delay={750}> */}
                    <span>Human</span>
                  </Fade>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/home" component={Home} />
              <Route path="/bits" component={Bits} />
              <Route path="/pieces" component={Pieces} />
              <Route path="/human" component={Human} />
              <Route path="*" component={Landing} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default Main;