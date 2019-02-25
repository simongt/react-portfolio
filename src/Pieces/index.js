import React, { Component } from "react";
import { Fade } from 'react-reveal';
import PieceSlider from "./PieceSlider";

import "./style.css";

class Pieces extends Component {
  render() {
    // eslint-disable-next-line
    return (
      <div>

        <p className="pieces-description" style={{display: 'none'}}>
          Photography is a gift to me, and it fills me with joy to share a
          glimpse of moments captured in front of my lens. Press the left or
          right arrow keys to navigate between images (or click on either left
          or right areas of any image).
        </p>

        <div className="pieces">
            <Fade bottom distance="10em">
              <PieceSlider />
            </Fade>
        </div>


        <footer className="photo-credit" style={{
          margin: '0.5em 0',
          textAlign: 'center'
        }}>
          <Fade top delay={500} distance="1em">
            <span>
              &copy; Photography by Simon G. Tsegay
            </span>
          </Fade>
        </footer>
      </div>
    );
  }
}

export default Pieces;
