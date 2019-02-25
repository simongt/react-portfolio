import React, { Component } from "react";

import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';

import styled, { css } from 'styled-components';

const WIDTH = '300px', HEIGHT = '150px';

const Container = styled.div`
  border: 1px solid red;
  position: relative;
  overflow: hidden;
  width: ${WIDTH};
`;

const Children = styled.div`
  width: ${WIDTH};
  position: relative;
  height: ${HEIGHT};
`;

const Arrow = styled.div`
  text-shadow: 1px 1px 1px #fff;
  z-index: 100;
  line-height: ${HEIGHT};
  text-align: center;
  position: absolute;
  top: 0;
  width: 10%;
  font-size: 3em;
  cursor: pointer;
  user-select: none;
  ${props => props.right ? css`left: 90%;` : css`left: 0%;`}
`;

const Dot = styled.span`
  font-size: 1.5em;
  cursor: pointer;
  text-shadow: 1px 1px 1px #fff;
  user-select: none;
`;

const Dots = styled.span`
  text-align: center;
  width: ${WIDTH};
  z-index: 100;
`;

const CarouselUI = ({ position, total, handleClick, children }) => (
  <Container>
    <Children>
      {children}
      <Arrow onClick={handleClick} data-position={position - 1}>{'<'}</Arrow>
      <Arrow right onClick={handleClick} data-position={position + 1}>{'>'}</Arrow>
    </Children>
    <Dots>
      {Array(...Array(total)).map((val, index) =>
        <Dot key={index} onClick={handleClick} data-position={index}>
          {index === position ? '● ' : '○ '}
        </Dot>
      )}
    </Dots>
  </Container>
);

const Carousel = makeCarousel(CarouselUI);

export class PieceCarousel extends Component {
  render() {
    return (
      <Carousel>
        <Slide right>
          <div>
            <h1>Slide 1</h1>
            <p>Slide Description</p>
          </div>
        </Slide>
        <Slide right>
          <div>
            <h1>Slide 2</h1>
            <p>Slide Description</p>
          </div>
        </Slide>
        <Slide right>
          <div>
            <h1>Slide 3</h1>
            <p>Slide Description</p>
          </div>
        </Slide>
        <Slide right>
          <div>
            <h1>Slide 4</h1>
            <p>Slide Description</p>
          </div>
        </Slide>
        <Slide right>
          <div>
            <h1>Slide 5</h1>
            <p>Slide Description</p>
          </div>
        </Slide>
      </Carousel>
    )
  }
}

export default PieceCarousel
