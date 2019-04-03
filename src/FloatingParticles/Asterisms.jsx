import React from 'react';
import Particles from "react-particles-js";

export default function Asterisms() {
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
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: "#ffffff"
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000"
              },
              polygon: {
                nb_sides: 3
              }
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: true,
                speed: 0.5,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 1.5,
              random: true,
              anim: {
                enable: true,
                speed: 1.5,
                size_min: 1,
                sync: false
              }
            },
            line_linked: {
              enable: true,
              distance: 96,
              color: "#00ffff",
              opacity: 0.33,
              width: 0.7
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "bounce",
              bounce: true,
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          retina_detect: true
        }}
      />
      {/* <Particles
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          zIndex: -2
        }}
        params={{
          particles: {
            number: {
              value: 25,
              density: {
                enable: true,
                value_area: 1500
              }
            },
            color: {
              value: "#ffc47c"
            },

            line_linked: {
              enable: true,
              opacity: 0.05
            },
            move: {
              direction: "left",
              speed: 0.1
            },
            size: {
              value: 3
            },
            opacity: {
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.01
              }
            }
          },
          retina_detect: true
        }}
      /> */}
      <Particles
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          zIndex: -3
        }}
        params={{
          particles: {
            number: {
              value: 25,
              density: {
                enable: true,
                value_area: 1500
              }
            },
            color: {
              value: "#00ffff"
            },

            line_linked: {
              enable: true,
              opacity: 0.05
            },
            move: {
              direction: "right",
              speed: 0.075
            },
            size: {
              value: 3.5
            },
            opacity: {
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.01
              }
            }
          },
          retina_detect: true
        }}
      />
    </div>
  );
}