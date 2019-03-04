import React, { Component } from "react";
import Tabs from "./Tabs";
import { Fade } from 'react-reveal';
import { about } from './seed';
import "./style.css";
import "./responsive.css";

class Human extends Component {
  
  constructor(props) {
    super(props);
    console.log('Human --> constructor');
  }

  componentDidMount = () => {
    console.log('Human --> componentDidMount: ' + this.props.path);
    console.log('--{ Human render cycle complete }--');
    console.log('');
  }

  componentDidUpdate = (prevProps, prevState) => {
    console.log('Human --> componentDidUpdate: ' + this.props.path);
    console.log('--{ Human render cycle complete }--');
    console.log('');
  }

  render() {
    console.log('Human --> render');
    return (
      <div className="human-wrapper">
        <Fade top distance="5em">
          <div className="human-photo">
            <img src="img/techie-guy-512px.jpg" alt="<SimonGT/>" />
          </div>
        </Fade>
        <div className="human-tabs">
          <Fade bottom distance="5em">
            <Tabs>
              {about.map(tab => {
                return !tab.hidden && (
                  <div key={tab.id} className="human-tab" label={tab.label}>
                    <p className="human-description">{tab.description}</p>
                  </div>
                );
              })}
            </Tabs>
          </Fade>
        </div>
      </div>
    );
  }
}

export default Human;
