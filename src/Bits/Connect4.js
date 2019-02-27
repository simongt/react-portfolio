import React, { Component } from 'react'

export class Connect4 extends Component {
  render() {
    return (
      <div className="project-item"> {/* Project Container */}
        <h3>Connect Four (jQuery)</h3>
        <div className="project-thumbnail">
          <a href="https://simongt.github.io/connect-four/"> {/* Live Link */}
            <img src="/img/bits/connect-4.gif" alt="Connect 4" />
          </a>
        </div>
        <p> {/* Project Description */}
          Used HTML, CSS Grid, JavaScript (with jQuery) to create Connect Four, a turn-based game where players compete to form a connecting line of four discs on a grid.
              </p>
        <ul className="icon-links">
          <li> {/* Repo Link */}
            <a href="https://github.com/simongt/connect-four">
              GitHub
                  </a>
          </li>
          <li> {/* Live Link */}
            <a href="https://simongt.github.io/connect-four/">
              Live
                  </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Connect4
