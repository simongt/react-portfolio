import React, { Component } from "react";
import PieceSlider from "./PieceSlider";
// import PieceGallery from "./PieceGallery";
import "./style.css";

class Pieces extends Component {
  render() {
    // eslint-disable-next-line
    return (
      <div className="pieces">

        <p className="pieces-description">
          Photography is a gift to me, and it fills me with joy to share a
          glimpse of moments captured in front of my lens. Press the left or
          right arrow keys to navigate between images (or click on either left
          or right areas of any image).
        </p>

        <PieceSlider />
        {/* <PieceGallery /> */}

        <footer className="photo-credit">
          &copy; Photography by Simon G. Tsegay
        </footer>
      </div>
    );
  }
}

export default Pieces;
