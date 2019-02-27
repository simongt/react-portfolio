import React, { Component } from 'react'

export class DuckHunt extends Component {
  render() {
    return (
      <div className="project-item"> {/* Project Container */}
        <h3>Duck Hunt (VanillaJS)</h3>
        <div className="project-thumbnail">
          <a href="https://simongt.github.io/duck-hunt/"> {/* Live Link */}
            <img src="/img/bits/duck-hunt.gif" alt="Duck Hunt" />
          </a>
        </div>
        <p> {/* Project Description */}
          Used HTML, CSS and JavaScript to create Duck Hunt, a classic light gun game where a player shoots virtual ducks that their faithful hunting dog flushes out.
              </p>
        <ul className="icon-links">
          <li> {/* Repo Link */}
            <a href="https://github.com/simongt/duck-hunt">GitHub</a>
          </li>
          <li> {/* Live Link */}
            <a href="https://simongt.github.io/duck-hunt/">Live</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default DuckHunt
