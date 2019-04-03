import React, { Component } from 'react'

export class SimonGT extends Component {
  render() {
    return (
      <div className="project-item"> {/* Project Container */}
        <h3>&lt;SimonGT/&gt; (React)</h3> {/* Project Title */}
        <div className="project-thumbnail">
          <a href="https://simongt.net"> {/* Live Link */}
            <img src="/img/bits/portfolio.gif" alt="simongt.net" />
          </a>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center'
        }}>
          <p> {/* Project Description */}
            Used React, JavaScript, CSS Grid + FlexBox to create a responsive portfolio website that alternates page views using React Router.
          </p>
          <a href="https://github.com/simongt/react-portfolio">
            <i 
              className="fab fa-github" 
              style={{
                fontSize: '3em',
                marginLeft: '0.5em',
                color: '#fc0'
              }}
            />
          </a>
        </div>
      </div>
    )
  }
}

export default SimonGT
