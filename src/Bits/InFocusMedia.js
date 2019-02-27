import React, { Component } from 'react'

export class InFocusMedia extends Component {
  render() {
    return (
      <div className="project-item"> {/* Project Container */}
        <h3>In Focus Media</h3>
        <div className="project-thumbnail">
          <a href="https://www.infocusmedia.us/"> {/* Live Link */}
            <img src="/img/bits/infocusmedia-us.gif" alt="In Focus Media" />
          </a>
        </div>
        <p> {/* Project Description */}
          Used HTML, CSS and SmugMug's CMS to build a customized web platform for a creative media business that specializes in photography.
              </p>
        <ul className="icon-links">
          <li> {/* Repo Link */}
            <a href="https://github.com/simongt?tab=repositories">GitHub</a>
          </li>
          <li> {/* Live Link */}
            <a href="https://www.infocusmedia.us/">Live</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default InFocusMedia
