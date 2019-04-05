import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import { Flip, Fade } from 'react-reveal';
import Typist from "react-typist";
import "babel-polyfill";

import "./style.css";

class Home extends Component {

  constructor(props) {
    super(props);
    console.log('Home --> constructor');
  }

  componentDidMount = () => {
    console.log('Home --> componentDidMount: ' + this.props.path);
    console.log('--{ Home render cycle complete }--');
    console.log('');
  }

  componentDidUpdate = (prevProps, prevState) => {
    console.log('Home --> componentDidUpdate: ' + this.props.path);
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
                  I'm <strong className="emphasize"><a href="https://linkedin.com/in/simongt" target="_blank" rel="noopener noreferrer">Simon</a></strong>,
                </span>
                <br />
                <Typist>
                  <span>
                    a <strong className="emphasize"><NavLink to="/bits">web developer</NavLink></strong>
                  </span>
                  <Typist.Backspace count={15} delay={3000} />
                  <span>
                    a <strong className="emphasize"><NavLink to="/pieces">photographer</NavLink></strong>
                  </span>
                  <Typist.Backspace count={14} delay={2000} />
                  <span>
                    an <strong className="emphasize"><a href="https://generalassemb.ly/instructors/simon-tsegay/18377" target="_blank" rel="noopener noreferrer">instructor</a></strong>
                  </span>
                  <Typist.Backspace count={15} delay={3000} />
                  <span>
                    a <strong className="emphasize"><NavLink to="/human">human being</NavLink></strong>
                  </span>
                  <Typist.Backspace count={13} delay={2000} />
                  <span>
                    a <strong className="emphasize"><NavLink to="/bits">web developer</NavLink></strong>
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
                    <i 
                      className="fab fa-linkedin" 
                      style={{
                        fontSize: 'calc(100vmin/12)',
                        margin: '0 calc(100vmin/66) 0 0',
                      }}
                    />
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
                    <i 
                      className="fab fa-github" 
                      style={{
                        fontSize: 'calc(100vmin/12)',
                      }}
                    />
                  </a>
                </li>
              </Flip>
              <Flip left delay={600}>
                <li>
                  <a href="mailto:simon@simongt.net?subject=Visitor from SimonGT.net&body=Hi Simon!">
                    <i 
                      className="fas fa-envelope" 
                      style={{
                        fontSize: 'calc(100vmin/12)',
                        margin: '0 0 0 calc(100vmin/66)',
                      }}
                    />
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
