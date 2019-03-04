import React, { Component } from "react";
import { 
  Route,
  HashRouter as Router,
  Switch
} from "react-router-dom";
import is from "is_js";

// import NavBarLanding from "../NavBarLanding";
// import HomeLanding from "../HomeLanding";
import NavBar from "../NavBar";
import Home from "../Home";
import Bits from "../Bits";
import Pieces from "../Pieces";
import Human from "../Human";
import {
  PinkSlinky
} from "../AmbiantCanvas";

import "./style.css";
import "./responsive.css";

class Main extends Component {

  constructor(props) {
    super(props);
    console.log('Main --> constructor');
  
    this.state = {
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
  }
  
  componentDidMount = () => {
    console.log('Main --> componentDidMount');
    console.log('--{ Main render cycle complete }--');
    console.log('');
    
    this.setState({
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

  componentDidUpdate = (prevProps, prevState) => {
    console.log('Main --> componentDidUpdate');
    console.log('--{ Main render cycle complete }--');
    console.log('');
  }

  render() {
    console.log('Main --> render');
    const { browser } = this.state;
    return (
      <Router>
        <div className="background">
          {/* canvas seems to run very slowly on most browsers */}
          {(is.chrome() || is.safari()) && <PinkSlinky />}
          <div className="main">
            <NavBar />
            <div className="content">
              <Switch>
                <Route 
                  exact path="/"
                  component={() => (
                    <Home browser={browser} path="/" />
                  )}
                />
                <Route 
                  path="/bits"
                  component={() => (
                    <Bits browser={browser} path="/bits" />
                  )}
                />
                <Route 
                  path="/pieces"
                  component={() => (
                    <Pieces browser={browser} path="/pieces" />
                  )}
                />
                <Route 
                  path="/human"
                  component={() => (
                    <Human browser={browser} path="/human" />
                  )}
                />
                <Route 
                  path="*"
                  component={() => (
                    <Home browser={browser} path="/" />
                  )}
                />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default Main;