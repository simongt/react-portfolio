import React, { Component } from "react";
import { 
  Route,
  HashRouter as Router,
  Switch
} from "react-router-dom";

import Landing from "../Landing";
import NavBar from "../NavBar";
import NavBarLanding from "../NavBarLanding";
import Home from "../Home";
import Bits from "../Bits";
import Pieces from "../Pieces";
import Human from "../Human";

import "./style.css";
import "./responsive.css";

class Main extends Component {
  state = {
    isLandingView: true
  }

  render() {
    const { isLandingView } = this.state;
    return (
      <Router>
        <div className="main">
          {/* if landing view, use slow reveal animations */}
          {isLandingView ? <NavBarLanding /> : <NavBar />}          
          <div className="content">
            <Switch>
              {isLandingView ? (
                <Route exact path="/" component={Landing} />
              ) : (
                <Route exact path="/" component={Home} />
              )}
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