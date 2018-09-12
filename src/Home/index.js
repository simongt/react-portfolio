import React, { Component } from "react";

class Home extends Component {
  render() {
    // query select the body

    // pass object into FastClick containing content selector, on-navigate (callback function)

    // rotate text

    // let the drawer...

    // 

    return (
      <div className="content js-content" data-page="home">
        <header className="hero">
          <div className="home-avatar">
            <img src="/img/avatar-brown.png" alt="Avatar" />
          </div>
          <div className="home-title">
            <h1 className="title">
              Hello.
              <br />
              I'm <strong className="emphasize">
                Simon
              </strong>,<br />a <strong className="emphasize js-rotate">
                web developer
              </strong>
              <br />
              in New York City.
            </h1>
            
            <ul className="home-fa">
              <li>
                <a href="https://linkedin.com/in/simongt" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin" />
                </a>
              </li>
              <li>
                <a href="https://github.com/simongt" target="_blank" rel="noopener noreferrer">
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
