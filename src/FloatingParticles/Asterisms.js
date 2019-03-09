import React, { Component } from 'react';
import Particles from "react-particles-js";

export class Asterisms extends Component {
  render() {
    console.log('Asterisms --> render');
    return (
      <div
        className="particles-container"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          zIndex: -1,
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
            zIndex: -1,
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
                  "value_area": 800
                }
              },
              "color": {
                "value": "#ffffff"
              },
              "shape": {
                "type": "circle",
                "stroke": {
                  "width": 0,
                  "color": "#000000"
                },
                "polygon": {
                  "nb_sides": 3
                }
              },
              "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                  "enable": false,
                  "speed": 0.5,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 1.5,
                "random": false,
                "anim": {
                  "enable": false,
                  "speed": 33,
                  "size_min": 0.1,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": true,
                "distance": 128,
                "color": "#ffffff",
                "opacity": 0.33,
                "width": 0.7
              },
              "move": {
                "enable": true,
                "speed": 1.5,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "bounce",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 600
                }
              }
            },
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 400,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8,
                  "speed": 3
                },
                "repulse": {
                  "distance": 200,
                  "duration": 0.4
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": true
          }}
        />
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
              "color": {
                "value": "#00ffff"
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

export default Asterisms;