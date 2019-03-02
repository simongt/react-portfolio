import React, { Component } from 'react'

export class ListManagerReact extends Component {
  render() {
    return (
      <div className="project-item"> {/* Project Container */}
        <h3>List Manager (React)</h3>
        <div className="project-thumbnail">
          <a href="https://simongt.github.io/react-to-do-list/"> {/* Live Link */}
            <img
              src="/img/bits/to-do-react.gif"
              alt="To-Do List Manager (React)"
            />
          </a>
        </div>
        <p> {/* Project Description */}
          Used React, FlexBox, CSS and SVG's to build List Manager, a full CRUD app to organize lists of tasks (desktop ready, Chrome / Firefox friendly).
              </p>
        <ul className="icon-links">
          <li> {/* Repo Link */}
            <a href="https://github.com/simongt/react-to-do-list">
              GitHub
            </a>
          </li>
          <li> {/* Live Link */}
            <a href="https://simongt.github.io/react-to-do-list/">Live</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default ListManagerReact
