import React, { Component } from "react";
import { 
  Route,
  HashRouter as Router,
  Switch
} from "react-router-dom";
import is from "is_js";

import Landing from "../Landing";
import NavBar from "../NavBar";
// import NavBarLanding from "../NavBarLanding";
import Home from "../Home";
import Bits from "../Bits";
import Pieces from "../Pieces";
import Human from "../Human";

import "./style.css";
import "./responsive.css";

class Main extends Component {

  constructor(props) {
    console.log('Main --> constructor');

    super(props);
  
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
  
  componentDidMount = (props) => {
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
        <div className="main">
          <NavBar />
          <div className="content">
            <Switch>
              <Route 
                exact path="/"
                component={() => (
                  <Home browser={browser} />
                )}
              />
              <Route 
                path="/bits"
                component={() => (
                  <Bits browser={browser} />
                )}
              />
              <Route 
                path="/pieces"
                component={() => (
                  <Pieces browser={browser} />
                )}
              />
              <Route 
                path="/human"
                component={() => (
                  <Human browser={browser} />
                )}
              />
              <Route 
                path="*"
                component={() => (
                  <Landing browser={browser} />
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