/* eslint-disable no-param-reassign */
import './style.css';
import p5 from 'p5';
import Player from './Player';
import Map from './Map';

const LEVEL1 = new Map();
const PLAYER1 = new Player(1, 1);
const PLAYER2 = new Player(17, 1);

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(1200, 720);
    PLAYER1.setMap(LEVEL1);
    PLAYER2.setMap(LEVEL1);
  };

  p.draw = () => {
    p.background(10);
    LEVEL1.show(p);
    PLAYER1.show(p);
    PLAYER2.show(p);
  };

  p.keyPressed = () => {
    const K = p.key.toLowerCase();

    if (p.keyCode === p.RIGHT_ARROW) {
      PLAYER1.move('RIGHT');
    }

    if (p.keyCode === p.LEFT_ARROW) {
      PLAYER1.move('LEFT');
    }

    if (p.keyCode === p.UP_ARROW) {
      PLAYER1.move('UP');
    }

    if (p.keyCode === p.DOWN_ARROW) {
      PLAYER1.move('DOWN');
    }

    if (K === 'd') {
      PLAYER2.move('RIGHT');
    }

    if (K === 'a') {
      PLAYER2.move('LEFT');
    }

    if (K === 'w') {
      PLAYER2.move('UP');
    }

    if (K === 's') {
      PLAYER2.move('DOWN');
    }
  };
};
// eslint-disable-next-line new-cap
export default new p5(sketch);
