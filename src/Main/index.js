import React, { Component } from "react";
import { 
  Route,
  HashRouter as Router,
  Switch
} from "react-router-dom";
import is from "is_js";

import { PinkSlinky } from "../AmbiantCanvas";
import NavBar from "../NavBar";
// import NavBarLanding from "../NavBarLanding";
import Home from "../Home";
// import HomeLanding from "../HomeLanding";
import Bits from "../Bits";
import Pieces from "../Pieces";
import Human from "../Human";

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

    // JavaScript engine seems to run especially slowly on FireFox when processing Canvas + Typist
    if (is.firefox()) {
      document.body.style.background = 'hsla(256,75%,50%,1)';
    }
    
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
        <div className="main">
          {!is.firefox() && <PinkSlinky/>}
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
      </Router>
    );
  }
}

export default Main;