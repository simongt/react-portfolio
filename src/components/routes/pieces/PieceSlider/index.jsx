import React, { Component } from "react";
import PieceCard from "../PieceCard";
import { Fade } from 'react-reveal';
import { data } from '../seed';
import "./style.css";

class PieceSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: data.photos,
      photo: data.photos[0]
    };
  }

  nextPhoto = () => {
    let newIndex = this.state.photo.index + 1;
    if (newIndex >= this.state.photos.length) {
      newIndex -= this.state.photos.length;
    }
    console.log("move to next photo at index " + newIndex);
    this.setState({
      photo: data.photos[newIndex]
    });
  };

  prevPhoto = () => {
    let newIndex = this.state.photo.index - 1;
    if (newIndex < 0) {
      newIndex += this.state.photos.length;
    }
    console.log("move to previous photo at index " + newIndex);
    this.setState({
      photo: data.photos[newIndex]
    });
  };

  handleKeyDown = event => {
    console.log(
      event.key +
        " pressed from " +
        this.state.photo.index +
        " of " +
        this.state.photos.length
    );

    if (event.key === "ArrowLeft") {
      this.prevPhoto();
    } else if (event.key === "ArrowRight") {
      this.nextPhoto();
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown, false);
  }

  componentWillUnmount() {
    document.addEventListener("keydown", this.handleKeyDown, false);
  }

  render() {
    // eslint-disable-next-line
    const { photo } = this.state;
    return (
      <div className="image-slider">
        <div className="piece">
          <div className="next-prev-buttons">
            <Fade right distance={`1em`} delay={750}>
              <button className="prev-button" onClick={() => this.prevPhoto()}>
                &lt;
              </button>
            </Fade>
            {/* disabled={photo.index === 0} */}
            <Fade left distance={`1em`} delay={750}>
              <button className="next-button" onClick={() => this.nextPhoto()}>
                &gt;
              </button>
            </Fade>
            {/* disabled={photo.index === photos.length - 1} */}
          </div>
          <PieceCard className="photo" photo={photo} />
        </div>
      </div>
    );
  }
}

export default PieceSlider;
