import React, { Component } from 'react'

export class SimonGT extends Component {
  render() {
    return (
      <div className="project-item"> {/* Project Container */}
        <h3>&lt;SimonGT/&gt; (React)</h3> {/* Project Title */}
        <div className="project-thumbnail">
          <a href="https://simongt.net"> {/* Live Link */}
            <img src="/img/bits/portfolio.gif" alt="simongt.net" />
          </a>
        </div>
        <p> {/* Project Description */}
          Used CSS Grid + FlexBox, JavaScript and React to create a responsive portfolio website that alternates page views using React Router.
        </p>
        <ul className="icon-links">
          <li> {/* Repo Link */}
            <a href="https://github.com/simongt/react-portfolio">GitHub</a>
          </li>
          <li> {/* Live Link */}
            <a href="https://simongt.net">Live</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default SimonGT
