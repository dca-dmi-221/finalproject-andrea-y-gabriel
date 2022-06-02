import p5, { Image } from 'p5';
import Enemy from './Enemy';
import Player from './Player';
import Map from './Map';
import Buffalo from './Buffalo';
import Zebra from './Zebra';
import { InitialProps } from './Interface';

export interface IpropsApp {
  player1:Array<Image>,
  player2:Array<Image>,
  buffalo:Array<Image>,
  zebra:Array<Image>,
  bombImage:Image,
  sand:Image,
  rock:Image,
  shrub:Image,
  race:Image,
  gui:Image,
  home:Image,
  rules:Image,
  shield: Image,
  score: Image,
  story: Image
  purpleSand: Image;
  greenSand: Image;
}

const MAP = new Map();
const PLAYERS: Array<Player> = [];

const initialPropsPlayer1: InitialProps = {
  fil: 1,
  col: 1,
};
const initialPropsPlayer2: InitialProps = {
  fil: 2,
  col: 1,
};

const PLAYER1 = new Player(initialPropsPlayer1);
const PLAYER2 = new Player(initialPropsPlayer2);

export default class App {
  enemies: Array <Enemy>;
  player1: Array <Image> = [];
  player2: Array <Image> = [];
  buffalo: Array <Image> = [];
  zebra: Array <Image> = [];
  screen: number = 3;
  count: number = 0;
  gui: Image;
  home: Image;
  rules: Image;
  bomb: Image;
  shield: Image;
  score: Image;
  story: Image;
  purpleSand: Image;
  greenSand: Image;
  spacePurple!: number;
  spaceGreen!: number;

  constructor(
    {
      player1, player2, buffalo, zebra, bombImage, sand, rock, shrub, race, gui, home, rules,
      shield, score, story, purpleSand, greenSand,
    } : IpropsApp,
  ) {
    this.enemies = [];
    this.player1 = player1;
    this.player2 = player2;
    this.buffalo = buffalo;
    this.zebra = zebra;
    this.gui = gui;
    this.home = home;
    this.rules = rules;
    this.bomb = bombImage;
    this.shield = shield;
    this.score = score;
    this.story = story;
    this.purpleSand = purpleSand;
    this.greenSand = greenSand;

    PLAYERS.push(PLAYER2);
    PLAYERS.push(PLAYER1);
    PLAYER1.setImage1(this.player1[0]);
    PLAYER1.setImage2(this.player1[1]);
    PLAYER1.setImage3(this.player1[2]);
    PLAYER1.setImage4(this.player1[3]);
    PLAYER2.setImage1(this.player2[0]);
    PLAYER2.setImage2(this.player2[1]);
    PLAYER2.setImage3(this.player2[2]);
    PLAYER2.setImage4(this.player2[3]);
    PLAYER1.setMap(MAP);
    PLAYER2.setMap(MAP);
    MAP.setSand(sand);
    MAP.setRock(rock);
    MAP.setShrub(shrub);
    MAP.setRace(race);
    MAP.setPurple(purpleSand);
    MAP.setGreen(greenSand);
  }

  // eslint-disable-next-line class-methods-use-this
  movePlayer1(p:p5) {
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

  // eslint-disable-next-line class-methods-use-this
  movePlayer2(p:p5) {
    const K = p.key.toLowerCase();

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
  }

  // eslint-disable-next-line class-methods-use-this
  putBomb1(p:p5) {
    const K = p.key.toLowerCase();
    if (K === 'p') {
      PLAYER1.putBomb();
    }
  }

  // eslint-disable-next-line class-methods-use-this
  putBomb2(p:p5) {
    const K = p.key.toLowerCase();
    if (K === 'f') {
      PLAYER2.putBomb();
    }
  }

  // eslint-disable-next-line class-methods-use-this
  activeShield1(p:p5) {
    const K = p.key.toLowerCase();
    if (K === 'o') {
      PLAYER1.protectActive();
    }
  }

  // eslint-disable-next-line class-methods-use-this
  activeShield2(p:p5) {
    const K = p.key.toLowerCase();
    if (K === 'g') {
      PLAYER2.protectActive();
    }
  }

  keypress(p: p5) {
    this.movePlayer1(p);
    this.movePlayer2(p);
    this.putBomb1(p);
    this.putBomb2(p);
    this.activeShield1(p);
    this.activeShield2(p);
  }

  button(p:p5, xButton:number, yButton:number, wButton:number, hButton:number, screen:number) {
    const widthB = xButton + wButton;
    const heightB = yButton + hButton;
    if (xButton < p.mouseX && p.mouseX < widthB && yButton < p.mouseY && p.mouseY < heightB) {
      this.screen = screen;
    }
  }

  buttonScreen0(p:p5) {
    if (this.screen === 0) {
      this.button(p, 512, 440, 162, 52, 2);
      this.button(p, 505, 518, 195, 52, 1);
    }
  }

  buttonScreen1(p:p5) {
    if (this.screen === 1) {
      this.button(p, 945, 620, 162, 52, 2);
    }
  }

  buttonScreen2(p:p5) {
    if (this.screen === 2) {
      this.button(p, 540, 620, 121, 39, 3);
    }
  }

  mousePressed(p:p5) {
    this.buttonScreen0(p);
    this.buttonScreen1(p);
    this.buttonScreen2(p);
  }

  // eslint-disable-next-line class-methods-use-this
  showPlayers(p:p5) {
    PLAYERS.forEach((player) => {
      player.show(p, this.shield);
      // player.plusEnemyPoints(this.enemies);
    });
  }

  // eslint-disable-next-line class-methods-use-this
  setPositionPlayers() {
    PLAYER1.setFil(17);
    PLAYER1.setCol(13);
    PLAYER2.setFil(1);
    PLAYER2.setCol(1);
  }

  // eslint-disable-next-line class-methods-use-this
  setLevelPlayers(level:Array<Array<number>>) {
    PLAYERS.forEach((player) => {
      player.setLevel(level);
    });
  }

  showBombs(p:p5) {
    PLAYERS.forEach((player) => {
      player.showBomb(p, this.bomb, this.enemies);
    });
  }

  showEnemies(p:p5) {
    this.enemies.forEach((enemy) => {
      enemy.setMap(MAP);
      enemy.show(p);
      enemy.dead();
      enemy.move(p);
      PLAYER1.dead(enemy.getFil(), enemy.getCol(), 1, 1);
      PLAYER2.dead(enemy.getFil(), enemy.getCol(), 2, 1);
      this.truePositionPlayers();
      this.enemyDissapear(enemy);
    });
  }

  // eslint-disable-next-line class-methods-use-this
  truePositionPlayers() {
    PLAYERS.forEach((player) => {
      player.truePosition();
    });
  }

  enemyDissapear(enemy: Enemy) {
    if (enemy.getDie() === true) {
      this.enemies.splice(this.enemies.indexOf(enemy), 1);
    }
  }

  killenemies() {
    PLAYERS.forEach((player) => {
      player.killEnemy(this.enemies);
    });
  }

  showGui(p:p5) {
    p.image(this.gui, 0, 0);
    p.fill(54, 18, 81);
    p.textSize(40);
    p.text(PLAYER1.getLives(), 45, 293);
    p.textSize(25);
    p.text(`
    ${this.spacePurple}/50`, 170, 257);

    p.fill(0, 83, 38);
    p.textSize(40);
    p.text(PLAYER1.getPoints(), 45, 663);
    p.text(PLAYER2.getPoints(), 150, 663);
    p.text(PLAYER2.getLives(), 45, 563);
    p.textSize(25);
    p.text(`
    ${this.spaceGreen}/50`, 170, 527);
  }

  resetSpaces() {
    this.spaceGreen = 0;
    this.spacePurple = 0;
  }

  changeScreen(p:p5) {
    switch (this.screen) {
      case 0:
        p.image(this.home, 0, 0);
        break;

      case 1:
        p.image(this.rules, 0, 0);
        break;

      case 2:
        p.image(this.story, 0, 0);
        break;

      case 3:
        MAP.show(p, MAP.level1);
        this.spacePurple = MAP.countPurpleSpace();
        this.spaceGreen = MAP.countGreenSpace();
        this.showPlayers(p);
        this.setLevelPlayers(MAP.level1);
        this.showBombs(p);
        this.killenemies();
        this.showGui(p);
        if (this.spacePurple === 50 || this.spaceGreen === 50) {
          PLAYER1.plusPoints((this.spacePurple * 20));
          PLAYER2.plusPoints((this.spaceGreen * 20));
          this.screen += 1;
          this.setPositionPlayers();
          this.truePositionPlayers();
        }

        break;
      case 4:
        MAP.show(p, MAP.level2);
        this.resetSpaces();
        this.showPlayers(p);
        this.setLevelPlayers(MAP.level2);
        this.showBombs(p);
        this.killenemies();
        this.showGui(p);
        MAP.changeColorPurple(PLAYER1.getFil(), PLAYER1.getCol());
        MAP.changeColorGreen(PLAYER2.getFil(), PLAYER2.getCol());
        if (this.spacePurple === 50 || this.spaceGreen === 50) {
          PLAYER1.plusPoints((this.spacePurple * 20));
          PLAYER2.plusPoints((this.spaceGreen * 20));
          this.screen += 1;
          this.setPositionPlayers();
          this.truePositionPlayers();
        }
        break;
      case 5:
        MAP.show(p, MAP.level3);
        this.resetSpaces();
        this.showPlayers(p);
        this.setLevelPlayers(MAP.level3);
        this.showBombs(p);
        this.killenemies();
        this.randomEnemy(p);
        this.showEnemies(p);
        this.showGui(p);

        // PLAYER1.setLives(3);
        // PLAYER2.setLives(3);
        if (this.enemies.length === 0 && this.count === 15) {
          this.screen += 1;
        }
        break;

      case 6:
        p.image(this.score, 0, 0);
        break;

      default:
        break;
    }
  }

  // eslint-disable-next-line class-methods-use-this
  randomEnemy(p:p5) {
    if (p.frameCount % 200 === 0 && this.count < 15) {
      const num = Math.round(p.random(1));
      const i = Math.floor(p.random(19));
      const j = Math.floor(p.random(15));

      const initialPropsEnemy: InitialProps = {
        fil: i,
        col: j,
      };

      if (MAP.canMove(i, j, MAP.level1)) {
        // eslint-disable-next-line default-case
        switch (num) {
          case 0:
            // eslint-disable-next-line max-len
            this.enemies.push(new Buffalo(initialPropsEnemy, this.buffalo[0], this.buffalo[1], this.buffalo[2], this.buffalo[3]));
            break;
          case 1:
            // eslint-disable-next-line max-len
            this.enemies.push(new Zebra(initialPropsEnemy, this.zebra[0], this.zebra[1], this.zebra[2], this.zebra[3]));
            break;
        }
        this.count += 1;
      }
    }
  }
}
