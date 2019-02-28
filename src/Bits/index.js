import React, { Component } from "react";
import "./style.css";
// import "./responsive.css";

import SimonGT from "./SimonGT";
import Connect4 from "./Connect4";
import NotPocket from "./NotPocket";
import ListManagerReact from "./ListManagerReact";
import TicTacToe from "./TicTacToe";
import DuckHunt from "./DuckHunt";
import InFocusMedia from "./InFocusMedia";
import ISpot from "./ISpot";
// import ListManagerEJS from "./ListManagerEJS";
// import WeatherAnywhere from "./WeatherAnywhere";
// import Bit from "./Bit";

import { Fade } from 'react-reveal';

class Bits extends Component {

  constructor(props) {
    console.log('Bits --> constructor');
    super(props);
  }

  componentDidMount = () => {
    console.log('Bits --> componentDidMount');
    console.log('--{ Bits render cycle complete }--');
    console.log('');
  }
  
  componentDidUpdate = (prevProps, prevState) => {
    console.log('Bits --> componentDidUpdate');
    console.log('--{ Bits render cycle complete }--');
    console.log('');    
  }

  render() {
    const { browser } = this.props;
    let pace = 200;
    let counter = 0;
    return (
      <div style={{
        display: 'grid',
        justifyContent: 'center center',
      }}> {/* className='projects-container' */}
        {browser.isChrome || browser.isFirefox ? (
          <div style={{
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'center',
            width: 'calc(100vw - 1em)'
          }}>
            <Fade bottom delay={pace * counter++} distance="10em">
              <SimonGT />
            </Fade>
            <Fade bottom delay={pace * counter++} distance="10em">
              <Connect4 />
            </Fade>
            <Fade bottom delay={pace * counter++} distance="10em">
              <NotPocket />
            </Fade>
            <Fade bottom delay={pace * counter++} distance="10em">
              <ListManagerReact />
            </Fade>
            <Fade bottom delay={pace * counter++} distance="10em">
              <TicTacToe />
            </Fade>
            <Fade bottom delay={pace * counter++} distance="10em">
              <DuckHunt />
            </Fade>
            <Fade bottom delay={pace * counter++} distance="10em">
              <InFocusMedia />
            </Fade>
            <Fade bottom delay={pace * counter++} distance="10em">
              <ISpot />
            </Fade>
          </div>
        ) : (
          <div style={{
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'center',
            width: 'calc(100vw - 1em)'
          }}>
            <SimonGT />
            <Connect4 />
            <NotPocket />
            <ListManagerReact />
            <TicTacToe />
            <DuckHunt />
            <InFocusMedia />
            <ISpot />
          </div>
        )}

      </div>
    );
  }
}

export default Bits;
