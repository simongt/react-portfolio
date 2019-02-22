import React, { Component } from "react";
import { 
  Route,
  NavLink,
  HashRouter,
  Switch
} from "react-router-dom";

import Home from "../Home";
import Bits from "../Bits";
import Pieces from "../Pieces";
import Human from "../Human";

import "./style.css";
import "./responsive.css";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div className="main">
          <div className="menu-container">
            <ul className="header-left">
              <li>
                {/* Home component is linked to top left image */}
                <a href="/">
                  <img src="/img/sgt-logo.png" alt="SGT" />
                </a>
              </li>
            </ul>
            <ul className="header-right">
              <li>
                <NavLink to="/bits">Bits</NavLink>
              </li>
              <li>
                <NavLink to="/pieces">Pieces</NavLink>
              </li>
              <li>
                <NavLink to="/human">Human</NavLink>
              </li>
            </ul>
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/bits" component={Bits} />
              <Route path="/pieces" component={Pieces} />
              <Route path="/human" component={Human} />
            </Switch>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
