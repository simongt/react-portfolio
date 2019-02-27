import React, { Component } from 'react'

export class NotPocket extends Component {
  render() {
    return (
      <div className="project-item"> {/* Project Container */}
        <h3>!Pocket (Full-Stack)</h3>
        <div className="project-thumbnail">
          <a href="https://notpocket.herokuapp.com/"> {/* Live Link */}
            <img src="/img/bits/not-pocket.gif" alt="!Pocket" />
          </a>
        </div>
        <p> {/* Project Description */}
          Used React, Node, Express and Postgres to create !Pocket, a content-aggregation and discovery platform that lets users manage collections of saved online articles.
              </p>
        <ul className="icon-links">
          <li> {/* Repo Link */}
            <a href="https://git.generalassemb.ly/simon/project-3">
              GitHub
                  </a>
          </li>
          <li> {/* Live Link */}
            <a href="https://notpocket.herokuapp.com/">Live</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default NotPocket
