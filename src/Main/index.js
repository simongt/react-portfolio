import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "../Home";
import Bits from "../Bits";
import Sights from "../Sights";
import Human from "../Human";
import "./style.css";

class Main extends Component {
  
  render() {
    return <HashRouter>
        <div className="Main">
          {/* <h1 className="main title">Website</h1> */}
          <div className="menu-container">
            <ul className="header-left">
              <li>
                <img src="/img/sgt-logo.png" alt="SGT" />
              </li>
            </ul>
            <ul className="header-right">
              <li>
                <NavLink exact to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/bits">Bits</NavLink>
              </li>
              <li>
                <NavLink to="/sights">Sights</NavLink>
              </li>
              <li>
                <NavLink to="/human">Human</NavLink>
              </li>
            </ul>
          </div>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/bits" component={Bits} />
            <Route path="/sights" component={Sights} />
            <Route path="/human" component={Human} />
          </div>
        </div>
      </HashRouter>;
  }
}

export default Main;
