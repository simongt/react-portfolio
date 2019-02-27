import React, { Component } from 'react'

export class ListManager2 extends Component {
  render() {
    return (
      <div className="project-item"> {/* Project Container */}
        <h3>Task List (EJS)</h3>
        <div className="project-thumbnail">
          <a href="https://simongt.github.io/ejs-to-do-list/"> {/* Live Link */}
            <img src="/img/bits/to-do-ejs.gif" alt="Task List (EJS)" />
          </a>
        </div>
        <p> {/* Project Description */}
          Used EJS, Node, Express and Postgres to create Task List, a full CRUD app that organizes to-do items.
              </p>
        <ul className="icon-links">
          <li> {/* Repo Link */}
            <a href="https://github.com/simongt/ejs-to-do-list">GitHub</a>
          </li>
          <li> {/* Live Link */}
            <a href="https://simongt.github.io/ejs-to-do-list/">Live</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default ListManager2
