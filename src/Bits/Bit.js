import React, { Component } from 'react';
// import LazyLoad from 'react-lazy-load';

import './style.css'

export class Bit extends Component {
  render() {
    const {
      title,
      description,
      github,
      live,
      // imgUrl,
      gifUrl
    } = this.props.project;
    return (
      <div className="project-item">
        <div style={{ 
          display: 'flex',
          justifyContent: 'space-between',
        }}> 
          {/* project title */}
          <h3>{title}</h3>
          {/* container for top-right buttons */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}>
            {/* live link */}
            <a href={live} rel="noopener noreferrer" target="_blank">
              {/* open door icon (via font awesome) */}
              <i
                className="fas fa-door-open"
                style={{ fontSize: '2em', paddingTop: '0.1em' }}
              />
            </a>
            {/* github link */}
            <a href={github} rel="noopener noreferrer" target="_blank">
              {/* github icon (via font awesome) */}
              <i
                className="fab fa-github"
                style={{ fontSize: '2em', paddingTop: '0.1em' }}
              />
            </a>
          </div>
        </div>
        {/*  */}
        <div className="project-thumbnail">
          {/* live link */}
          <a href={live}>
            {/* <LazyLoad debounce={false}> */}
              <img src={gifUrl} alt={title} />
            {/* </LazyLoad> */}
          </a>
        </div>
        {/* project description */}
        <p style={{ textAlign: 'justify' }}>{description}</p> 
      </div>
    )
  }
}

export default Bit;