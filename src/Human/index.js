import React, { Component } from "react";
import Tabs from "./Tabs";
import "./style.css";
import "./responsive.css";
import { Fade } from 'react-reveal';

class Human extends Component {
  
  constructor(props) {
    console.log('Human --> constructor');
    super(props);
  }

  componentDidMount = () => {
    console.log('Human --> componentDidMount');
    console.log('--{ Human render cycle complete }--');
    console.log('');
  }

  componentDidUpdate = (prevProps, prevState) => {
    console.log('Human --> componentDidUpdate');
    console.log('--{ Human render cycle complete }--');
    console.log('');
  }

  render() {
    console.log('Human --> render');
    return (
      <div className="human-wrapper">
        <Fade top distance="5em">
          <div className="human-photo">
            <img src="img/techie-guy-512px.jpg" alt="<SimonGT/>" />
          </div>
        </Fade>
        <div className="human-tabs">
          <Fade bottom distance="5em">
            <Tabs>
              <div className="human-tab" label="About">
                <p className="human-description">
                  I'm a full-stack web developer based in New York City,
                  experienced in building and deploying user-friendly, seamless
                  web applications from wireframe to production. When not wearing
                  the hat of a developer, I enjoy engaging the world as a
                  photographer, creating and sharing visual memoirs that tell
                  stories through my lens.
                </p>
              </div>
              <div className="human-tab" label="Early Life">
                <p className="human-description">
                  Growing up, my family and I lived in several countries
                  throughout East Africa & the Middle East. I was a pre-teen when
                  we migrated to the U.S. and settled in the San Francisco Bay
                  Area.
                </p>
              </div>
              <div className="human-tab" label="Adult Life">
                <p className="human-description">
                  I studied computer science in college and worked in I.T. for
                  several years. I thought of it as a rite of passage living in
                  the Silicon Valley for decades. I naturally gravitated towards
                  technology. I also volunteered in my community as a youth mentor
                  and tutor at the Boys & Girls Club. I found it deeply rewarding
                  to impact young people in a positive way, so I transitioned into
                  full-time non-profit work focused around tech education and
                  youth development throughout the South Bay Area. Meanwhile, I
                  was actively working on the side towards turning my passion for
                  photography into my dream job.
                </p>
              </div>
              <div className="human-tab" label="Photography">
                <p className="human-description">
                  Photography is a gift to me, and it fills me with joy to share
                  it. Since my teen days, I’ve always greatly appreciated how it
                  challenged me to creatively express my unique way of seeing the
                  world; it’s given me a means to perceive beauty in everything,
                  every moment. Photographs have an incredible power, letting us
                  feel a flood of emotions while savoring and reliving moments. As
                  a wedding photographer since 2010, it’s been a tremendous honor
                  to capture such significant moments that allow my clients all
                  over the world to cherish their most treasured memories.
                </p>
              </div>
              <div className="human-tab" label="Interests">
                <p className="human-description">
                  My fiance and I currently live in the Bed-Stuy neighborhood of
                  Brooklyn. In our leisure time, we enjoy exploring the outdoors,
                  traveling the world and immersing in all its cultures together.
                  Whenever my schedule allows for some down time, I keep up with
                  basketball and football. I enjoy theater, chess and ping-pong.
                  I'm also an avid fan of sci-fi novels, films and TV!
                </p>
              </div>
            </Tabs>
          </Fade>
        </div>
      </div>
    );
  }
}

export default Human;
