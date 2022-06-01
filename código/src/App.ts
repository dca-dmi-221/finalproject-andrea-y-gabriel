import p5, { Image } from 'p5';
import Enemy from './Enemy';
import Player from './Player';
import Map from './Map';
import Buffalo from './Buffalo';
import Zebra from './Zebra';

const LEVEL1 = new Map();
const PLAYER1 = new Player(1, 1);
const PLAYER2 = new Player(3, 1);

export default class App {
  enemies: Array <Enemy>;
  player1: Array <Image> = [];
  player2: Array <Image> = [];
  buffalo: Array <Image> = [];
  zebra: Array <Image> = [];
  screen: number;
  count: number = 0;
  // sand:Image;

  // eslint-disable-next-line max-len
  constructor(p1:Array<Image>, p2:Array<Image>, b:Array<Image>, z:Array<Image>, sand:Image, rock:Image, shrub:Image) {
    this.enemies = [];
    this.player1 = p1;
    this.player2 = p2;
    this.buffalo = b;
    this.zebra = z;
    this.screen = 0;
    // this.sand = sand;
    // this.rock
    // this.background = 0;

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
    LEVEL1.setSand(sand);
    LEVEL1.setRock(rock);
    LEVEL1.setShrub(shrub);
  }

  // eslint-disable-next-line class-methods-use-this
  keypress(p: p5) {
    const K = p.key.toLocaleLowerCase();

    if (K === 'd') {
      PLAYER2.move('RIGHT', LEVEL1.level1);
    }

    if (K === 'a') {
      PLAYER2.move('LEFT', LEVEL1.level1);
    }

    if (K === 'w') {
      PLAYER2.move('UP', LEVEL1.level1);
    }

    if (K === 's') {
      PLAYER2.move('DOWN', LEVEL1.level1);
    }

    if (p.keyCode === p.RIGHT_ARROW) {
      PLAYER1.move('RIGHT', LEVEL1.level1);
    }

    if (p.keyCode === p.LEFT_ARROW) {
      PLAYER1.move('LEFT', LEVEL1.level1);
    }

    if (p.keyCode === p.UP_ARROW) {
      PLAYER1.move('UP', LEVEL1.level1);
    }

    if (p.keyCode === p.DOWN_ARROW) {
      PLAYER1.move('DOWN', LEVEL1.level1);
    }
  }

  changeScreen(p:p5) {
    switch (this.screen) {
      case 0:
        LEVEL1.show(p, LEVEL1.level1);
        PLAYER1.show(p);
        PLAYER2.show(p);
        this.randomEnemy(p);
        this.enemies.forEach((enemy) => {
          enemy.setMap(LEVEL1);
          enemy.show(p);
          enemy.move(p, LEVEL1.level1);
          PLAYER1.dead(enemy.getFil(), enemy.getCol(), 1, 1);
          PLAYER2.dead(enemy.getFil(), enemy.getCol(), 2, 1);
          // LEVEL1.changeColor(p, PLAYER1.getX(), PLAYER1.getY());
        });

        // screen += 1;
        break;
      case 1:
        LEVEL1.show(p, LEVEL1.level1); PLAYER1.show(p);
        PLAYER2.show(p);
        // LEVEL1.changeColor(p, PLAYER1.getX(), PLAYER1.getY());
        // screen += 1;
        break;
      case 2:
        LEVEL1.show(p, LEVEL1.level1);
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
    if (p.frameCount % 200 === 0 && this.count < 15) {
      const i = Math.floor(p.random(19));
      const j = Math.floor(p.random(15));
      const num = Math.round(p.random(1));

      if (LEVEL1.canMove(i, j, LEVEL1.level1)) {
        // eslint-disable-next-line default-case
        switch (num) {
          case 0:
            // eslint-disable-next-line max-len
            this.enemies.push(new Buffalo(i, j, this.buffalo[0], this.buffalo[1], this.buffalo[2], this.buffalo[3]));
            console.log('spawn buffalo');
            break;
          case 1:
            // eslint-disable-next-line max-len
            this.enemies.push(new Zebra(i, j, this.zebra[0], this.zebra[1], this.zebra[2], this.zebra[3]));
            console.log('spawn zebra');
            break;
        }
        this.count += 1;
      }
    }
  }
}
