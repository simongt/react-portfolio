import React, { Component } from "react";
import { 
  Route,
  HashRouter as Router,
  Switch
} from "react-router-dom";
import is from "is_js";

import { Asterisms } from "../FloatingParticles";
import { NebulousBliss } from "../AmbientCanvas";
import NavBar from "../NavBar";
import Home from "../Home";
import Bits from "../Bits";
import Pieces from "../Pieces";
import Human from "../Human";
// import NavBarLanding from "../NavBarLanding";
// import HomeLanding from "../HomeLanding";

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

    /* JavaScript engine seems to process animations especially slowly on FireFox when running Canvas + Typist. As a failsafe, setting background color to same as that of canvas. */
    document.body.style.background = (
      is.firefox() ?
        `linear-gradient(
          to right bottom,
          hsla(256,75%,25%,1),
          hsla(256,75%,50%,1),
          hsla(345,75%,55%,1)
        )` : `hsla(256,75%,50%,1)`
    );
    
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
          {!is.firefox() && <NebulousBliss />}
          {!is.firefox() && <Asterisms />}
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