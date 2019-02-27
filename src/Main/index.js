import React, { Component } from "react";
import { 
  Route,
  HashRouter as Router,
  Switch
} from "react-router-dom";
import is from "is_js";

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
    isLandingView: true,
    browser: {
      isOpera: false,
      isFirefox: false,
      isSafari: false,
      isIE: false,
      isEdge: false,
      isChrome: false,
      isOther: false
    },
  }

  updateILV = (isLandingView) => {
    this.setState({
      isLandingView: isLandingView
    })
  }

  componentDidMount = (props) => {
    this.setState({
      isLandingView: this.props.isLandingView,
      browser: {
        isOpera: is.opera(),
        isFirefox: is.firefox(),
        isSafari: is.safari(),
        isIE: is.ie(),
        isEdge: is.edge(),
        isChrome: is.chrome(),
        isOther: !(is.opera() || is.firefox() || is.safari() || is.ie() || is.edge() || is.chrome())
      }
    });
  }

  render() {
    const { isLandingView, browser } = this.state;
    return (
      <Router>
        <div className="main">
          {/* if landing view, use slow reveal animations */}
          {isLandingView ? <NavBarLanding /> : <NavBar />}          
          <div className="content">
            <Switch>
              {isLandingView ? (
                <Route 
                  exact path="/" 
                  component={() => <Landing browser={browser} />} 
                />
              ) : (
                <Route 
                  exact path="/" 
                  component={() => <Home browser={browser} />} 
                />
              )}
              <Route 
                path="/bits" 
                component={() => <Bits browser={browser} updateILV={this.updateILV} />}
              />
              <Route 
                path="/pieces" 
                component={() => <Pieces browser={browser} updateILV={this.updateILV} />}
              />
              <Route 
                path="/human" 
                component={() => <Human browser={browser} updateILV={this.updateILV} />}
              />
              <Route 
                path="*" 
                component={() => <Landing browser={browser} updateILV={this.updateILV} />}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default Main;