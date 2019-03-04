import React, { Component } from 'react';

class CanvasBackground extends Component {
  constructor(props) {
    console.log('CanvasBackground --> constructor');    
    
    super(props);

    this.canvas = null;
    this.ctx = null;
    this.center = null;
    this.frameId = null;
  }

  componentDidMount() {
    console.log('CanvasBackground --> componentDidMount');
    console.log('--{ CanvasBackground render cycle complete }--');
    console.log('');

    this.createCanvas();
    this.resize();
    this.init();
    this.startLoop();
    window.addEventListener('resize', this.resize.bind(this));
  }

  componentWillUnmount() {
    console.log('CanvasBackground --> componentWillUnmount');
    console.log('--{ CanvasBackground render cycle complete }--');
    console.log('');

    if (this.frameId !== null) {
      window.cancelAnimationFrame(this.frameId);
    }
  }

  init() { }

  draw() { }

  render() {
    console.log('CanvasBackground --> render');

    const styles = {
      position: 'fixed',
      zIndex: -1,
      top: 0,
      left: 0,
      width: 100 + 'vw',
      height: 100 + 'vh'
    };

    return (
      <div>
        <canvas id={'canvasA'} style={styles} />
        <canvas id={'canvasB'} style={styles} />
      </div>
    );
  }

  createCanvas() {
    this.canvas = {
      a: document.getElementById('canvasA'),
      b: document.getElementById('canvasB')
    };
    this.ctx = {
      a: this.canvas.a.getContext('2d'),
      b: this.canvas.b.getContext('2d')
    };
    this.center = [];
    this.tick = 0;
  }

  resize() {
    const { innerWidth, innerHeight } = window;

    this.canvas.a.width = innerWidth;
    this.canvas.a.height = innerHeight;

    this.ctx.a.drawImage(this.canvas.b, 0, 0);

    this.canvas.b.width = innerWidth;
    this.canvas.b.height = innerHeight;

    this.ctx.b.drawImage(this.canvas.a, 0, 0);

    this.center[0] = 0.5 * this.canvas.a.width;
    this.center[1] = 0.5 * this.canvas.a.height;
  }

  startLoop() {
    if (this.frameId == null) {
      this.frameId = window.requestAnimationFrame(this.initDraw.bind(this));
    }
  }

  initDraw() {
    this.draw();
    this.frameId = window.requestAnimationFrame(this.initDraw.bind(this));
  }
}

export default CanvasBackground;
