import React, { Component } from 'react';

export class Bit extends Component {
  render() {
    const {
      title,
      description,
      github,
      live,
      // imgUrl,
      gifUrl
    } = this.props.project;
    return (
      <div className="project-item"> {/* Project Container */}
        <h3>{title}</h3> {/* Project Title */}
        <div className="project-thumbnail">
          <a href={live}> {/* Live Link */}
            <img src={gifUrl} alt={title} />
          </a>
        </div>
        <p>{description}</p> {/* Project Description */}
        <ul className="icon-links">
          <li> {/* Repo Link */}
            <a href={github}>GITHUB</a>
          </li>
          <li> {/* Live Link */}
            <a href={live}>LIVE</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Bit;