import React, { Component } from "react";
import Typist from "react-typist";
import "babel-polyfill";
import "./style.css";

class Home extends Component {
  render() {
    return (
      <div className="content js-content" data-page="home">
        <header className="hero">
          <div className="home-avatar">
            <img src="/img/avatar-brown.png" alt="Avatar" />
          </div>
          <div className="home-title">
            <h1 className="title">
              <div className="title-wrapper">
                Hello.
                <br />
                I'm <strong className="emphasize">Simon</strong>,<br />
                <Typist>
                  <span>
                    a <strong className="emphasize">web developer</strong>
                  </span>
                  <Typist.Backspace count={15} delay={2000} />
                  <span>
                    a <strong className="emphasize">photographer</strong>
                  </span>
                  <Typist.Backspace count={14} delay={2000} />
                  <span>
                    an <strong className="emphasize">instructor</strong>
                  </span>
                  <Typist.Backspace count={13} delay={2000} />
                  <span>
                    a <strong className="emphasize">web developer</strong>
                  </span>
                </Typist>
                in New York City.
              </div>
              <span className="subtitle">
                Knowledgeable in the design, development, integration and
                delivery of web applications.
              </span>
            </h1>

            <ul className="home-fa">
              <li>
                <a
                  href="https://linkedin.com/in/simongt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/simongt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github" />
                </a>
              </li>
              <li>
                <a href="mailto:simon@simongt.net?subject=Visitor from SimonGT.net&body=Hi Simon!">
                  <i className="fas fa-envelope" />
                </a>
              </li>
            </ul>
          </div>
        </header>
      </div>
    );
  }
}

export default Home;
