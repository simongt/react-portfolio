import React, { Component } from 'react'

export class Bit extends Component {
  render() {
    return (
      <div className="project-item" style={{ visibility: 'hidden' }}> {/* Project Container */}
        <h3> {/* Project Title */} </h3>
        <div className="project-thumbnail">
          <a href="https://simongt.net"> {/* Live Link */}
            <img
              className="project-placeholder"
              src="/img/sgt-logo.png"
              alt="Thumbnail of project."
            />
          </a>
        </div>
        <p /> {/* Project Description */}
        <ul className="icon-links">
          <li> {/* Repo Link */}
            <a href="https://github.com/simongt">GitHub</a>
          </li>
          <li> {/* Live Link */}
            <a href="https://simongt.net">Live</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Bit
