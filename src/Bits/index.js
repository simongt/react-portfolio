import React, { Component } from "react";
import "./style.css";
import "./responsive.css";

import { Fade } from 'react-reveal';

class Bits extends Component {
  render() {
    let pace = 250;
    let counter = 0;
    return (
      <div className="bits-content">
        <div className="projects-container">

          <Fade bottom delay={pace * counter++} distance="10em">
            <div className="project-item"> {/* Project Container */}
              <h3>&lt;SimonGT/&gt;</h3>
              <div className="project-thumbnail">
                <a href="https://simongt.net"> {/* Live Link */}
                  <img src="/img/bits/portfolio.gif" alt="simongt.net" />
                </a>
              </div>
              <p> {/* Project Description */}
                Used CSS Grid + FlexBox, JavaScript and React to create a
                responsive portfolio website that alternates page views using
                React Router.
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
          </Fade>

          <Fade bottom delay={pace * counter++} distance="10em">
            <div className="project-item"> {/* Project Container */}
              <h3>Connect Four</h3>
              <div className="project-thumbnail">
                <a href="https://simongt.github.io/connect-four/"> {/* Live Link */}
                  <img src="/img/bits/connect-4.gif" alt="Connect 4" />
                </a>
              </div>
              <p> {/* Project Description */}
                Used HTML, CSS Grid, JavaScript (with jQuery) to create Connect
                Four, a turn-based game where players compete to form a connecting
                line of four discs on a grid.
              </p>
              <ul className="icon-links">
                <li> {/* Repo Link */}
                  <a href="https://github.com/simongt/connect-four">
                    GitHub
                  </a>
                </li>
                <li> {/* Live Link */}
                  <a href="https://simongt.github.io/connect-four/">
                    Live
                  </a>
                </li>
              </ul>
            </div>
          </Fade>

          <Fade bottom delay={pace * counter++} distance="10em">
            <div className="project-item"> {/* Project Container */}
              <h3>!Pocket (Full-Stack)</h3>
              <div className="project-thumbnail">
                <a href="https://notpocket.herokuapp.com/"> {/* Live Link */}
                  <img src="/img/bits/not-pocket.gif" alt="!Pocket" />
                </a>
              </div>
              <p> {/* Project Description */}
                Used React, Node, Express and Postgres to create !Pocket, a
                content-aggregation and discovery platform that lets users manage
                collections of saved online articles.
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
          </Fade>

          <Fade bottom delay={pace * counter++} distance="10em">
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
                Used React, FlexBox, CSS and SVG's to build List Manager, a full
                CRUD app to organize lists of tasks (desktop ready, Chrome / 
                Firefox friendly).
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
          </Fade>

          <Fade bottom delay={pace * counter++} distance="10em">
            <div className="project-item"> {/* Project Container */}
              <h3>Tic-Tac-Toe</h3>
              <div className="project-thumbnail">
                <a href="https://simongt.github.io/tic-tac-toe/"> {/* Live Link */}
                  <img src="/img/bits/tic-tac-toe.gif" alt="Tic Tac Toe" />
                </a>
              </div>
              <p> {/* Project Description */}
                Used HTML, CSS, FlexBox, JavaScript (with jQuery) to create
                Tic-Tac-Toe, a turn-based game where players compete to form a
                connecting line of three X's or O's on a grid.
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
          </Fade>

          <Fade bottom delay={pace * counter++} distance="10em">
            <div className="project-item"> {/* Project Container */}
              <h3>Duck Hunt</h3>
              <div className="project-thumbnail">
                <a href="https://simongt.github.io/duck-hunt/"> {/* Live Link */}
                  <img src="/img/bits/duck-hunt.gif" alt="Duck Hunt" />
                </a>
              </div>
              <p> {/* Project Description */}
                Used HTML, CSS and JavaScript to create Duck Hunt, a classic 
                light gun game where a player shoots virtual ducks that their 
                faithful hunting dog flushes out.
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
          </Fade>

          <Fade bottom delay={pace * counter++} distance="10em">
            <div className="project-item"> {/* Project Container */}
              <h3>iSpot</h3>
              <div className="project-thumbnail">
                <a href="https://ispot-app.herokuapp.com/"> {/* Live Link */}
                  <img src="/img/bits/ispot.gif" alt="iSpot" />
                </a>
              </div>
              <p> {/* Project Description */}
                Used EJS, Node, Express and Postgres to create iSpot, a
                content-aggregation and discovery platform that lets users manage
                collections of saved locations.
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
          </Fade>

          <Fade bottom delay={pace * counter++} distance="10em">
            <div className="project-item"> {/* Project Container */}
              <h3>In Focus Media</h3>
              <div className="project-thumbnail">
                <a href="https://www.infocusmedia.us/"> {/* Live Link */}
                  <img src="/img/bits/infocusmedia-us.gif" alt="In Focus Media" />
                </a>
              </div>
              <p> {/* Project Description */}
                Used HTML, CSS and SmugMug's CMS to build a customized web
                platform for a creative media business that specializes in
                photography.
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
          </Fade>

          <Fade bottom delay={pace * counter++} distance="10em">
            <div className="project-item"> {/* Project Container */}
              <h3>Task List (EJS)</h3>
              <div className="project-thumbnail">
                <a href="https://simongt.github.io/ejs-to-do-list/"> {/* Live Link */}
                  <img src="/img/bits/to-do-ejs.gif" alt="Task List (EJS)" />
                </a>
              </div>
              <p> {/* Project Description */}
                Used EJS, Node, Express and Postgres to create Task List, a full 
                CRUD app that organizes to-do items.
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
          </Fade>

          <Fade bottom delay={pace * counter++} distance="10em">
            <div className="project-item"> {/* Project Container */}
              <h3>Weather Anywhere</h3>
              <div className="project-thumbnail">
                <a href="https://simongt.github.io/weather-checker/"> {/* Live Link */}
                  <img src="/img/bits/weather.gif" alt="Weather Anywhere" />
                </a>
              </div>
              <p> {/* Project Description */}
                Used HTML, CSS, JavaScript (with jQuery) and the OpenWeatherMap API
                to create Weather Anywhere.
              </p>
              <ul className="icon-links">
                <li> {/* Repo Link */}
                  <a href="https://github.com/simongt/weather-checker">GitHub</a>
                </li>
                <li> {/* Live Link */}
                  <a href="https://simongt.github.io/weather-checker/">Live</a>
                </li>
              </ul>
            </div>
          </Fade>

          <Fade bottom delay={pace * counter++} distance="10em">
            <div className="project-item" style={{ visibility: 'hidden' }}> {/* Project Container */}
              <h3> {/* Project Title */} </h3>
              <div className="project-thumbnail">
              <a href="https://simongt.net"> {/* Live Link */}
                <img
                  className="project-placeholder"
                  src="/img/sgt-logo.png"
                  alt="Thumbnail of project."
                />
              </a>
              </div>
              <p /> {/* Project Description */}
              <ul className="icon-links">
                <li> {/* Repo Link */}
                  <a href="https://github.com/simongt">GitHub</a>
                </li>
                <li> {/* Live Link */}
                  <a href="https://simongt.net">Live</a>
                </li>
              </ul>
            </div>
          </Fade>

          <Fade bottom delay={pace * counter++} distance="10em">
            <div className="project-item" style={{ visibility: 'hidden' }}> {/* Project Container */}
              <h3> {/* Project Title */} </h3>
              <div className="project-thumbnail">
              <a href="https://simongt.net"> {/* Live Link */}
                <img
                  className="project-placeholder"
                  src="/img/sgt-logo.png"
                  alt="Thumbnail of project."
                />
              </a>
              </div>
              <p /> {/* Project Description */}
              <ul className="icon-links">
                <li> {/* Repo Link */}
                  <a href="https://github.com/simongt">GitHub</a>
                </li>
                <li> {/* Live Link */}
                  <a href="https://simongt.net">Live</a>
                </li>
              </ul>
            </div>
          </Fade>

        </div>
      </div>
    );
  }
}

export default Bits;
