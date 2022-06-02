/* eslint-disable no-param-reassign */
import './style.css';
import p5, { Image } from 'p5';
import App from './App';

let app!: App;

let gui!: Image;
let sand!: Image;
let rock!: Image;
let shrub!: Image;
let home!: Image;
let rules!: Image;
let race!: Image;
let bombImage!: Image;

const player1: Array<Image> = [];
const player2: Array <Image> = [];
const buffalo: Array <Image> = [];
const zebra: Array <Image> = [];

const sketch = (p: p5) => {
  p.preload = () => {
    gui = p.loadImage('../assests/GUI.png');
    sand = p.loadImage('../assests/modulo.png');
    rock = p.loadImage('../assests/obstacles/rocks.png');
    shrub = p.loadImage('../assests/obstacles/arbusto.png');
    home = p.loadImage('../assests/home.png');
    rules = p.loadImage('../assests/rules.png');
    race = p.loadImage('../assests/race.png');
    bombImage = p.loadImage('../assests/bomb.png');

    player1[0] = p.loadImage('../assests/player/player1A.png');
    player1[1] = p.loadImage('../assests/player/player1B.png');
    player1[2] = p.loadImage('../assests/player/player1C.png');
    player1[3] = p.loadImage('../assests/player/player1D.png');

    player2[0] = p.loadImage('../assests/player/player2A.png');
    player2[1] = p.loadImage('../assests/player/player2B.png');
    player2[2] = p.loadImage('../assests/player/player2C.png');
    player2[3] = p.loadImage('../assests/player/player2D.png');

    buffalo[0] = p.loadImage('../assests/player/Bufalo2A.png');
    buffalo[1] = p.loadImage('../assests/player/Bufalo2B.png');
    buffalo[2] = p.loadImage('../assests/player/Bufalo2C.png');
    buffalo[3] = p.loadImage('../assests/player/Bufalo2D.png');

    zebra[0] = p.loadImage('../assests/player/cebra/a.png');
    zebra[1] = p.loadImage('../assests/player/cebra/b.png');
    zebra[2] = p.loadImage('../assests/player/cebra/c.png');
    zebra[3] = p.loadImage('../assests/player/cebra/d.png');
  };

  p.setup = () => {
    p.createCanvas(1200, 720);
    // eslint-disable-next-line max-len
    app = new App(player1, player2, buffalo, zebra, bombImage, sand, rock, shrub, race, gui, home, rules);
  };

  p.draw = () => {
    p.background(10);
    app.changeScreen(p);
  };

  p.keyPressed = () => {
    app.keypress(p);
  };

  p.mousePressed = () => {
    app.mousePressed(p);
  };
};
// eslint-disable-next-line new-cap
export default new p5(sketch);
