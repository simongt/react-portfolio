import CanvasBackground from './CanvasBackground';

import { HALF_PI, TAU, TO_RAD, rand, fadeInOut } from './utils/Math';

const { cos, sin, round } = Math;

const pipeCount = 32;
const pipePropCount = 8;
const pipePropsLength = pipeCount * pipePropCount;
const turnCount = 6;
const turnAmount = (360 / turnCount) * TO_RAD;
const turnChanceRange = 360;
// const baseSpeed = 1.0;
// const rangeSpeed = 0.5;
// const baseTTL = 250;
// const rangeTTL = 750;
// const baseWidth = 2;
// const rangeWidth = 1;
const baseSpeed = 0.5;
const rangeSpeed = 0.25;
const baseTTL = 50;
const rangeTTL = 950;
const baseWidth = 1.0;
const rangeWidth = 0.5;
// Violet Theme
// const baseHue = 260;
// const rangeHue = 30;
// const backgroundColor = 'hsla(256,75%,50%,1)';
// Blue Theme
const baseHue = 215;
const rangeHue = 40;
const backgroundColor = 'hsla(222,100%,40%,1)';

class BluePrint extends CanvasBackground {
  constructor(props) {
    console.log('BluePrint --> constructor: extends CanvasBackground ');
    
    super(props);

    this.tick = null;
    this.pipeProps = null;
  }

  init() {
    this.initPipes();
  }

  draw() {
    this.updatePipes();
    this.BluePrint();
  }

  initPipes() {
    console.log('BluePrint --> initPipes',);
    this.pipeProps = new Float32Array(pipePropsLength);
    for (let i = 0; i < pipePropsLength; i += pipePropCount) {
      this.initPipe(i);
      // this.initPipe(i);
      // this.initPipe(i);
      // this.initPipe(i);
    }
  }

  initPipe(i) {
    // console.log('BluePrint --> initPipe: ', i);
    let x, y, direction, speed, life, ttl, width, hue;
    x = rand(this.canvas.a.width);
    y = this.center[1];
    // y = this.canvas.a.height;
    direction = (round(rand(1)) ? HALF_PI : TAU - HALF_PI);
    // direction = TAU - HALF_PI;
    speed = baseSpeed + rand(rangeSpeed);
    ttl = baseTTL + rand(rangeTTL);
    width = baseWidth + rand(rangeWidth);
    life = 0;
    hue = baseHue + rand(rangeHue);
    this.pipeProps.set(
      [x, y, direction, speed, life, ttl, width, hue], i
    );
  }

  updatePipes() {
    this.tick++;
    let i;
    for (i = 0; i < pipePropsLength; i += pipePropCount) {
      this.updatePipe(i);
    }
  }

  updatePipe(i) {
    let
      i2 = 1 + i, // i: x, i2: y
      i3 = 2 + i, // direction
      i4 = 3 + i, // speed
      i5 = 4 + i, // life
      i6 = 5 + i, // ttl
      i7 = 6 + i, // width
      i8 = 7 + i; // hue
    let x, y, direction, speed, life, ttl, width, hue, turnChance, turnBias;

    x = this.pipeProps[i];
    y = this.pipeProps[i2];
    direction = this.pipeProps[i3];
    speed = this.pipeProps[i4];
    life = this.pipeProps[i5];
    ttl = this.pipeProps[i6];
    width = this.pipeProps[i7];
    hue = this.pipeProps[i8];

    this.drawPipe(x, y, life, ttl, width, hue);

    life++;
    
    x += cos(direction) * speed;
    y += sin(direction) * speed;
    
    turnChance = !(this.tick % round(rand(turnChanceRange))) && (!(round(x) % 6) || !(round(y) % 6));

    turnBias = round(rand(1)) ? -1 : 1;
    
    direction += turnChance ? turnAmount * turnBias : 0;

    this.pipeProps[i] = x;
    this.pipeProps[i2] = y;
    this.pipeProps[i3] = direction;
    this.pipeProps[i5] = life;

    this.checkBounds(x, y);
    
    life > ttl && this.initPipe(i); // if pipe dies, spawn new pipe
  }

  drawPipe(x, y, life, ttl, width, hue) {
    this.ctx.a.save();
    this.ctx.a.strokeStyle = `hsla(${hue},66%,100%,${fadeInOut(life, ttl) * 0.0625})`;
    this.ctx.a.beginPath();
    this.ctx.a.arc(x, y, width, 0, TAU);
    this.ctx.a.stroke();
    this.ctx.a.closePath();
    this.ctx.a.restore();
  }

  checkBounds(x, y) {
    if (x > this.canvas.a.width) {
      x = 0
    }
    if (x < 0) {
      x = this.canvas.a.width;
    }
    if (y > this.canvas.a.height) {
      y = 0;
    }
    if (y < 0) {
      y = this.canvas.a.height;
    }
  }

  BluePrint() {
    this.ctx.b.save();
    this.ctx.b.fillStyle = backgroundColor;
    this.ctx.b.fillRect(0, 0, this.canvas.b.width, this.canvas.b.height);
    this.ctx.b.restore();

    // tail
    this.ctx.b.save();
    this.ctx.b.filter = 'blur(0em)';
    this.ctx.b.drawImage(this.canvas.a, 0, 0);
    this.ctx.b.restore();
    
    // head
    this.ctx.b.save();
    this.ctx.b.filter = 'blur(0em)';
    this.ctx.b.drawImage(this.canvas.a, 0, 0);
    this.ctx.b.restore();
  }
}

export default BluePrint;
