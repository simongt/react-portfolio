import React, { Component } from "react";
import { Fade } from 'react-reveal';

import "./style.css";
import "./responsive.css";

import { projects } from './seed';
import Bit from "./Bit";

class Bits extends Component {

  constructor(props) {
    super(props);
    console.log('Bits --> constructor');
  }

  componentDidMount = () => {
    console.log('Bits --> componentDidMount: ' + this.props.path);
    console.log('--{ Bits render cycle complete }--');
    console.log('');
  }
  
  componentDidUpdate = (prevProps, prevState) => {
    console.log('Bits --> componentDidUpdate: ' + this.props.path);
    console.log('--{ Bits render cycle complete }--');
    console.log('');
  }

  render() {
    console.log('Bits --> render');
    
    const { browser } = this.props;
    let pace = 200, counter = 0;
    return (
      <div style={{
        display: 'grid',
        justifyContent: 'center center',
      }}> {/* grid container for all projects */}
        <div style={{
          display: 'flex',
          flexFlow: 'row wrap',
          justifyContent: 'center',
          width: 'calc(100vw - 1em)',
        }}>
          {/* only use react-reveal effects for Chrome & Firefox */}
          {browser.isChrome || browser.isFirefox ? (
            projects.map(project => {
              return (!project.hidden && (
                <Fade
                  key={project.id}
                  bottom 
                  delay={pace * counter++} 
                  distance="10em"
                >
                  {/* project container */}
                  <Bit key={project.id} project={project} />
                </Fade>
              ));
            })
          ) : (
            projects.map(project => {
              return (!project.hidden && (
                <div key={project.id}>
                  {/* project container */}
                  <Bit project={project} />
                </div>
              ));
            })
          )}
        </div>
      </div>
    );
  }
}

export default Bits;
