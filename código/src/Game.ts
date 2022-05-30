/* eslint-disable no-param-reassign */
import './style.css';
import p5, { Image } from 'p5';
import Player from './Player';
import Map from './Map';

const LEVEL1 = new Map();
const PLAYER1 = new Player(3, 1);
const PLAYER2 = new Player(3, 1);

let gui!: Image;
let viewD1pj!: Image;
let viewU1pj!: Image;
let viewR1pj!: Image;
let viewL1pj!: Image;

let viewD2pj!: Image;
let viewU2pj!: Image;
let viewR2pj!: Image;
let viewL2pj!: Image;

const sketch = (p: p5) => {
  p.preload = () => {
    gui = p.loadImage('../assests/GUI.png');
    viewD1pj = p.loadImage('../assests/Player/player1A.png');
    PLAYER1.setImage1(viewD1pj);
    PLAYER1.setImage(viewD1pj);
    viewU1pj = p.loadImage('../assests/Player/player1B.png');
    PLAYER1.setImage2(viewU1pj);
    viewR1pj = p.loadImage('../assests/Player/player1C.png');
    PLAYER1.setImage3(viewR1pj);
    viewL1pj = p.loadImage('../assests/Player/player1D.png');
    PLAYER1.setImage4(viewL1pj);

    viewD2pj = p.loadImage('../assests/Player/player2A.png');
    PLAYER2.setImage1(viewD2pj);
    viewU2pj = p.loadImage('../assests/Player/player2B.png');
    PLAYER2.setImage2(viewU2pj);
    viewR2pj = p.loadImage('../assests/Player/player2C.png');
    PLAYER2.setImage3(viewR2pj);
    viewL2pj = p.loadImage('../assests/Player/player2D.png');
    PLAYER2.setImage4(viewL2pj);
  };

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
    LEVEL1.showLevel2(p, PLAYER1.getFil(), PLAYER1.getCol(), 1);
    LEVEL1.showLevel2(p, PLAYER2.getFil(), PLAYER2.getCol(), 2);
    p.image(gui, 0, 0);
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
