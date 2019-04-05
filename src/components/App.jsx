import React, { Component } from "react";
import { 
  Route,
  HashRouter as Router,
  Switch
} from "react-router-dom";
import is from "is_js";

// Utilities
import { Asterisms } from "./util/floating-particles";
import { NebulousBliss } from "./util/ambient-canvas/AmbientCanvas";

// Layout
import NavBar from "./layout/nav-bar/NavBar";

// Routes
import Home from "./routes/home/Home";
import Bits from "./routes/bits/Bits";
import Pieces from "./routes/pieces/Pieces";
import Human from "./routes/human/Human";

import "../style/app.css";
import "../style/app-media-queries.css";

class App extends Component {
  constructor(props) {
    super(props);
    console.log('App --> constructor');
  
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
    console.log('App --> componentDidMount');
    console.log('--{ App render cycle complete }--');
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
    console.log('App --> componentDidUpdate');
    console.log('--{ App render cycle complete }--');
    console.log('');
  }

  render() {
    console.log('App --> render');
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

export default App;