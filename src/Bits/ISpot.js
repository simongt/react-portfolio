import React, { Component } from 'react'

export class ISpot extends Component {
  render() {
    return (
      <div className="project-item"> {/* Project Container */}
        <h3>iSpot</h3>
        <div className="project-thumbnail">
          <a href="https://ispot-app.herokuapp.com/"> {/* Live Link */}
            <img src="/img/bits/ispot.gif" alt="iSpot" />
          </a>
        </div>
        <p> {/* Project Description */}
          Used EJS, Node, Express and Postgres to create iSpot, a content-aggregation and discovery platform that lets users manage collections of saved locations.
              </p>
        <ul className="icon-links">
          <li> {/* Repo Link */}
            <a href="https://github.com/simongt/ispot">
              GitHub
          </a>
          </li>
          <li> {/* Live Link */}
            <a href="https://ispot-app.herokuapp.com/">Live</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default ISpot
