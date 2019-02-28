import React, { Component } from "react";
import { Flip, Fade } from 'react-reveal';
import Typist from "react-typist";
import "babel-polyfill";
import "./style.css";

class Home extends Component {

  constructor(props) {
    console.log('Home --> constructor');
    super(props);
  }


  componentDidMount = () => {
    console.log('Home --> componentDidMount');
    console.log('--{ Home render cycle complete }--');
    console.log('');
  }

  componentDidUpdate = (prevProps, prevState) => {
    console.log('Home --> componentDidUpdate');
    console.log('--{ Home render cycle complete }--');
    console.log('');
  }

  render() {
    console.log('Home --> render');

    return (
      <div className="content js-content" data-page="home">
        <header className="hero">
          <div className="home-avatar">
            <img src="/img/avatar-brown.png" alt="Avatar" />
          </div>
          <div className="home-title">
            <h1 className="title">
              <div className="title-wrapper">
                <span>Hello.</span>
                <br />
                <span>
                  I'm <strong className="emphasize">Simon</strong>,
                </span>
                <br />
                <Typist>
                  <span>
                    a <strong className="emphasize">web developer</strong>
                  </span>
                  <Typist.Backspace count={15} delay={3000} />
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
              </div>
              <Fade top>
                <span className="subtitle">
                  Knowledgeable in the design, development, integration and
                  delivery of web applications.
                </span>
              </Fade>
            </h1>
            <ul className="home-fa">
              <Flip left delay={300}>
                <li>
                  <a
                    href="https://linkedin.com/in/simongt"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin" />
                  </a>
                </li>
              </Flip>
              <Flip left delay={450}>
                <li>
                  <a
                    href="https://github.com/simongt"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github" />
                  </a>
                </li>
              </Flip>
              <Flip left delay={600}>
                <li>
                  <a href="mailto:simon@simongt.net?subject=Visitor from SimonGT.net&body=Hi Simon!">
                    <i className="fas fa-envelope" />
                  </a>
                </li>
              </Flip>
            </ul>
          </div>
        </header>
      </div>
    );
  }
}

export default Home;
