import React, { Component } from "react";
import { Flip, Fade } from 'react-reveal';
import Typist from "react-typist";
import "babel-polyfill";
import "./style.css";

class HomeLanding extends Component {

  constructor(props) {
    super(props);
    console.log('HomeLanding --> constructor');
  }

  componentDidMount = () => {
    console.log('HomeLanding --> componentDidMount: ' + this.props.path);
    console.log('--{ HomeLanding render cycle complete }--');
    console.log('');
  }

  componentDidUpdate = (prevProps, prevState) => {
    console.log('HomeLanding --> componentDidUpdate: ' + this.props.path);
    console.log('--{ HomeLanding render cycle complete }--');
    console.log('');
  }

  render() {
    console.log('HomeLanding --> render');
    return (
      <div className="content js-content" data-page="home">
        <header className="hero">
          <Fade>
            <div className="home-avatar">
              <img src="/img/avatar-brown.png" alt="Avatar" />
            </div>
          </Fade>
          <div className="home-title">
            <h1 className="title">
              <div className="title-wrapper">
                <Fade>
                  <span>Hello.</span>
                </Fade>
                <br />
                <Fade delay={1250}>
                  <span>
                    I'm <strong className="emphasize">Simon</strong>,
                  </span>
                  <br />
                  <Typist>
                    <span>
                      a <strong className="emphasize">web developer</strong>
                    </span>
                    <Typist.Backspace count={15} delay={5000} />
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
                  <span>
                    in New York City.
                  </span>
                </Fade>
              </div>
              <Fade top delay={2500}>
                <span className="subtitle">
                  Knowledgeable in the design, development, integration and
                  delivery of web applications.
                </span>
              </Fade>
            </h1>

            <Flip left cascade delay={3250}>
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
            </Flip>
          </div>
        </header>
      </div>
    );
  }
}

export default HomeLanding;
