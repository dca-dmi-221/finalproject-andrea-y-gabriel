import p5, { Image } from 'p5';
import Enemy from './Enemy';
import Player from './Player';
import Map from './Map';
import Buffalo from './Buffalo';
import Zebra from './Zebra';

const LEVEL1 = new Map();
const PLAYER1 = new Player(1, 1);
const PLAYER2 = new Player(3, 1);
let ENEMY!: Enemy;

export default class App {
  enemies: Array <Enemy>;
  player1: Array <Image> = [];
  player2: Array <Image> = [];
  buffalo: Array <Image> = [];
  zebra: Array <Image> = [];
  screen: number;
  count: number = 0;

  constructor(p1: Array <Image>, p2: Array <Image>, b: Array <Image>, z:Array <Image>) {
    this.enemies = [];
    this.player1 = p1;
    this.player2 = p2;
    this.buffalo = b;
    this.zebra = z;
    this.screen = 0;
    PLAYER1.setImage1(this.player1[0]);
    PLAYER1.setImage2(this.player1[1]);
    PLAYER1.setImage3(this.player1[2]);
    PLAYER1.setImage4(this.player1[3]);
    PLAYER2.setImage1(this.player2[0]);
    PLAYER2.setImage2(this.player2[1]);
    PLAYER2.setImage3(this.player2[2]);
    PLAYER2.setImage4(this.player2[3]);
    PLAYER1.setMap(LEVEL1);
    PLAYER2.setMap(LEVEL1);
    ENEMY = new Enemy(15, 1, this.buffalo[0], this.buffalo[1], this.buffalo[2], this.buffalo[3]);
  }

  // eslint-disable-next-line class-methods-use-this
  show(p: p5) {
    LEVEL1.show(p);
    PLAYER1.show(p);
    PLAYER2.show(p);
  }

  // eslint-disable-next-line class-methods-use-this
  keypress(p: p5) {
    const K = p.key.toLocaleLowerCase();

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
  }

  changeScreen(p:p5) {
    switch (this.screen) {
      case 0:
        LEVEL1.show(p);
        PLAYER1.show(p);
        PLAYER2.show(p);
        ENEMY.show(p);
        ENEMY.move(p);
        // this.randomEnemy(p);
        this.enemies.forEach((enemy) => {
          enemy.show(p);
          enemy.move(p);
        });

        // screen += 1;
        break;
      case 1:
        LEVEL1.show(p);
        PLAYER1.show(p);
        PLAYER2.show(p);
        // LEVEL1.changeColor(p, PLAYER1.getX(), PLAYER1.getY());
        // screen += 1;
        break;
      case 2:
        LEVEL1.show(p);
        PLAYER1.show(p);
        PLAYER2.show(p);
        // if (ENEMIES2.kill(PLAYER1.getFil(), PLAYER1.getCol())) {
        //   PLAYER1.setPosition(1, 1);
        //   PLAYER1.lessLives();
        // }
        // if (ENEMIES2.kill(PLAYER2.getFil(), PLAYER2.getCol())) {
        //   PLAYER2.setPosition(3, 1);
        //   PLAYER2.lessLives();
        // }
        // screen += 1;
        break;

      default:
        break;
    }
  }

  // eslint-disable-next-line class-methods-use-this
  randomEnemy(p:p5) {
    if (p.frameCount % 100 === 0 && this.count < 15) {
      const i = Math.floor(p.random(19));
      const j = Math.floor(p.random(15));
      const num = Math.round(p.random(1));

      if (LEVEL1.canMove(i, j)) {
        // eslint-disable-next-line default-case
        switch (num) {
          case 0:
            // eslint-disable-next-line max-len
            this.enemies.push(new Buffalo(i, j, this.buffalo[0], this.buffalo[1], this.buffalo[2], this.buffalo[3]));
            break;
          case 1:
            // eslint-disable-next-line max-len
            this.enemies.push(new Zebra(i, j, this.buffalo[0], this.buffalo[1], this.buffalo[2], this.buffalo[3]));
            break;
        }
        this.count += 1;
      }
    }
  }
}
