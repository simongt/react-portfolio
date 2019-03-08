import React, { Component } from 'react';
import Particles from "react-particles-js";

export class Simple extends Component {
  render() {
    console.log('Simple --> render');
    return (
      <div
        className="particles-container"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          zIndex: -1
        }}
      >
        <Particles
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            zIndex: -1
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
                  "opacity_min": 0.025
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

export default Simple;