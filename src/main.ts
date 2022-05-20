/* eslint-disable no-param-reassign */
import './style.css';
import p5 from 'p5';

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(500, 500);
  };

  p.draw = () => {
    p.background(80);
  };

  p.keyPressed = () => {

  };
};
// eslint-disable-next-line new-cap
export default new p5(sketch);
