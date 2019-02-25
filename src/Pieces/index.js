import React, { Component } from "react";
import { Fade } from 'react-reveal';

import PieceSlider from "./PieceSlider";
// import PieceGallery from "./PieceGallery";
import "./style.css";

class Pieces extends Component {
  render() {
    // eslint-disable-next-line
    return (
      <div>

        <p className="pieces-description">
          Photography is a gift to me, and it fills me with joy to share a
          glimpse of moments captured in front of my lens. Press the left or
          right arrow keys to navigate between images (or click on either left
          or right areas of any image).
        </p>

        <div className="pieces">
            <Fade bottom distance="10em">
              <PieceSlider />
              {/* <PieceGallery /> */}
            </Fade>
        </div>

        <Fade top delay={500} distance="1em">
          <footer className="photo-credit">
            &copy; Photography by Simon G. Tsegay
          </footer>
        </Fade>
      </div>
    );
  }
}

export default Pieces;
