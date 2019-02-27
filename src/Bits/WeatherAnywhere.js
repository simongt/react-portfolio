import React, { Component } from 'react'

export class WeatherAnywhere extends Component {
  render() {
    return (
      <div className="project-item"> {/* Project Container */}
        <h3>Weather Anywhere</h3>
        <div className="project-thumbnail">
          <a href="https://simongt.github.io/weather-checker/"> {/* Live Link */}
            <img src="/img/bits/weather.gif" alt="Weather Anywhere" />
          </a>
        </div>
        <p> {/* Project Description */}
          Used HTML, CSS, JavaScript (with jQuery) and the OpenWeatherMap API to create Weather Anywhere.
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
    )
  }
}

export default WeatherAnywhere
