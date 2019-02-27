import React, { Component } from 'react'

export class TicTacToe extends Component {
  render() {
    return (
      <div className="project-item"> {/* Project Container */}
        <h3>Tic-Tac-Toe</h3>
        <div className="project-thumbnail">
          <a href="https://simongt.github.io/tic-tac-toe/"> {/* Live Link */}
            <img src="/img/bits/tic-tac-toe.gif" alt="Tic Tac Toe" />
          </a>
        </div>
        <p> {/* Project Description */}
          Used HTML, CSS, FlexBox, JavaScript (with jQuery) to create Tic-Tac-Toe, a turn-based game where players compete to form a connecting line of three X's or O's on a grid.
              </p>
        <ul className="icon-links">
          <li> {/* Repo Link */}
            <a href="https://github.com/simongt?tab=repositories">GitHub</a>
          </li>
          <li> {/* Live Link */}
            <a href="https://simongt.github.io/tic-tac-toe/">Live</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default TicTacToe
