import React, { Component } from 'react';
import Particles from "react-particles-js";

export class ShootingStars extends Component {
  render() {
    console.log('ShootingStars --> render');
    return (
      <div
        className="particles-container"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          zIndex: -2,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Particles
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            zIndex: -2,
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          params={{
            "particles": {
              "number": {
                "value": 50,
                "density": {
                  "enable": true,
                  "value_area": 1500
                }
              },
              "line_linked": {
                "enable": true,
                "opacity": 0.05
              },
              "move": {
                "direction": "right",
                "speed": 0.1
              },
              "size": {
                "value": 3
              },
              "opacity": {
                "anim": {
                  "enable": true,
                  "speed": 1,
                  "opacity_min": 0.01
                }
              }
            },
            "retina_detect": true
          }}
        />
      </div>
    )
  }
}

export default ShootingStars;