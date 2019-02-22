import React, { Component } from "react";
import "./style.css";
import "./responsive.css";

class Bits extends Component {
  render() {
    return (
      <div className="bits-content">
        <div className="projects-container">
          {/* Project Container */}
          <div className="project-item">
            <h3>&lt;SimonGT/&gt;</h3>
            <div className="project-thumbnail">
              {/* Live Link */}
              <a href="https://simongt.net">
                <img src="/img/bits/portfolio.gif" alt="simongt.net" />
              </a>
            </div>
            {/* Project Description */}
            <p>
              Used CSS Grid + FlexBox, JavaScript and React to create a
              web-responsive portfolio site that alternates page views using
              React Router.
            </p>
            <ul className="icon-links">
              {/* Repo Link */}
              <li>
                <a href="https://github.com/simongt/react-portfolio">GitHub</a>
              </li>
              {/* Live Link */}
              <li>
                <a href="https://simongt.net">Live</a>
              </li>
            </ul>
          </div>

          {/* Project Container */}
          <div className="project-item">
            <h3>Connect Four</h3>
            <div className="project-thumbnail">
              {/* Live Link */}
              <a href="https://simongt.github.io/connect-four/">
                <img src="/img/bits/connect-4.gif" alt="Connect 4" />
              </a>
            </div>
            {/* Project Description */}
            <p>
              Used HTML, CSS Grid, JavaScript (with jQuery) to create Connect
              Four, a turn-based game where players compete to form a connecting
              line of 4 discs on a grid.
            </p>
            <ul className="icon-links">
              {/* Repo Link */}
              <li>
                <a href="https://github.com/simongt/connect-four">
                  GitHub
                </a>
              </li>
              {/* Live Link */}
              <li>
                <a href="https://simongt.github.io/connect-four/">
                  Live
                </a>
              </li>
            </ul>
          </div>

          {/* Project Container */}
          <div className="project-item">
            <h3>!Pocket</h3>
            <div className="project-thumbnail">
              {/* Live Link */}
              <a href="https://notpocket.herokuapp.com/">
                <img src="/img/bits/not-pocket.gif" alt="!Pocket" />
              </a>
            </div>
            {/* Project Description */}
            <p>
              Used React, Express and Postgres to create !Pocket, a
              content-aggregation and discovery platform that lets users manage
              collections of saved online articles.
            </p>
            <ul className="icon-links">
              {/* Repo Link */}
              <li>
                <a href="https://git.generalassemb.ly/simon/project-3">
                  GitHub
                </a>
              </li>
              {/* Live Link */}
              <li>
                <a href="https://notpocket.herokuapp.com/">Live</a>
              </li>
            </ul>
          </div>

          {/* Project Container */}
          <div className="project-item">
            <h3>To-Do List Manager (React)</h3>
            <div className="project-thumbnail">
              {/* Live Link */}
              <a href="https://simongt.github.io/react-to-do-list/">
                <img src="/img/bits/to-do-react.gif" alt="To-Do List Manager (React)" />
              </a>
            </div>
            {/* Project Description */}
            <p>
              Used React, JavaScript, FlexBox, CSS and SVG's to build ongoing project that manages to-do lists (desktop ready, best viewed on Chrome). Backlog includes implementation of LocalStorage.
            </p>
            <ul className="icon-links">
              {/* Repo Link */}
              <li>
                <a href="https://github.com/simongt/react-to-do-list">
                  GitHub
                </a>
              </li>
              {/* Live Link */}
              <li>
                <a href="https://simongt.github.io/react-to-do-list/">Live</a>
              </li>
            </ul>
          </div>

          {/* Project Container */}
          <div className="project-item">
            <h3>Tic-Tac-Toe</h3>
            <div className="project-thumbnail">
              {/* Live Link */}
              <a href="https://simongt.github.io/tic-tac-toe/">
                <img src="/img/bits/tic-tac-toe.gif" alt="Tic Tac Toe" />
              </a>
            </div>
            <p />
            <ul className="icon-links">
              {/* Repo Link */}
              <li>
                <a href="https://github.com/simongt?tab=repositories">GitHub</a>
              </li>
              {/* Live Link */}
              <li>
                <a href="https://simongt.github.io/tic-tac-toe/">Live</a>
              </li>
            </ul>
          </div>

          {/* Project Container */}
          <div className="project-item">
            <h3>Duck Hunt</h3>
            <div className="project-thumbnail">
              {/* Live Link */}
              <a href="https://simongt.github.io/duck-hunt/">
                <img src="/img/bits/duck-hunt.gif" alt="Duck Hunt" />
              </a>
            </div>
            <p />
            <ul className="icon-links">
              {/* Repo Link */}
              <li>
                <a href="https://github.com/simongt/duck-hunt">GitHub</a>
              </li>
              {/* Live Link */}
              <li>
                <a href="https://simongt.github.io/duck-hunt/">Live</a>
              </li>
            </ul>
          </div>

          {/* Project Container */}
          <div className="project-item">
            <h3>iSpot</h3>
            <div className="project-thumbnail">
              {/* Live Link */}
              <a href="https://ispot-app.herokuapp.com/">
                <img src="/img/bits/ispot.gif" alt="iSpot" />
              </a>
            </div>
            {/* Project Description */}
            <p>
              Used EJS, Express and Postgres to create iSpot, a
              content-aggregatio and discovery platform that lets users manage
              collections of saved locations.
            </p>
            <ul className="icon-links">
              {/* Repo Link */}
              <li>
                <a href="https://github.com/simongt/ispot">
                  GitHub
                </a>
              </li>
              {/* Live Link */}
              <li>
                <a href="https://ispot-app.herokuapp.com/">Live</a>
              </li>
            </ul>
          </div>

          {/* Project Container */}
          <div className="project-item">
            <h3>In Focus Media</h3>
            <div className="project-thumbnail">
              {/* Live Link */}
              <a href="https://www.infocusmedia.us/">
                <img src="/img/bits/infocusmedia-us.gif" alt="In Focus Media" />
              </a>
            </div>
            <p />
            <ul className="icon-links">
              {/* Repo Link */}
              <li>
                <a href="https://github.com/simongt?tab=repositories">GitHub</a>
              </li>
              {/* Live Link */}
              <li>
                <a href="https://www.infocusmedia.us/">Live</a>
              </li>
            </ul>
          </div>

          {/* Project Container */}
          <div className="project-item">
            <h3>Task List (EJS)</h3>
            <div className="project-thumbnail">
              {/* Live Link */}
              <a href="https://simongt.github.io/ejs-to-do-list/">
                <img src="/img/bits/to-do-ejs.gif" alt="Task List (EJS)" />
              </a>
            </div>
            <p />
            <ul className="icon-links">
              {/* Repo Link */}
              <li>
                <a href="https://github.com/simongt/ejs-to-do-list">GitHub</a>
              </li>
              {/* Live Link */}
              <li>
                <a href="https://simongt.github.io/ejs-to-do-list/">Live</a>
              </li>
            </ul>
          </div>

          {/* Project Container */}
          <div className="project-item">
            <h3>Weather Anywhere</h3>
            <div className="project-thumbnail">
              {/* Live Link */}
              <a href="https://simongt.github.io/weather-checker/">
                <img src="/img/bits/weather.gif" alt="Weather Anywhere" />
              </a>
            </div>
            <p />
            <ul className="icon-links">
              {/* Repo Link */}
              <li>
                <a href="https://github.com/simongt/weather-checker">GitHub</a>
              </li>
              {/* Live Link */}
              <li>
                <a href="https://simongt.github.io/weather-checker/">Live</a>
              </li>
            </ul>
          </div>

          <div className="project-item" style={{ visibility: 'hidden' }}>
            {/* <h3>Project 11</h3> */}
            <div className="project-thumbnail">
              <img
                className="project-placeholder"
                src="/img/sgt-logo.png"
                alt="Thumbnail of project."
              />
            </div>
            <p>
              ...
            </p>
          </div>

          <div className="project-item" style={{ visibility: 'hidden' }}>
            {/* <h3>Project 12</h3> */}
            <div className="project-thumbnail">
              <img
                className="project-placeholder"
                src="/img/sgt-logo.png"
                alt="Thumbnail of project."
              />
            </div>
            <p>
              ...
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Bits;
