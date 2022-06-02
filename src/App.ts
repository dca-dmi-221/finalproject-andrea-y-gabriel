import p5, { Image } from 'p5';
import Enemy from './Enemy';
import Player from './Player';
import Map from './Map';
import Buffalo from './Buffalo';
import Zebra from './Zebra';
import { InitialProps } from './Interface'; // fil col

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
    rules:Image, // game interface
}

const MAP = new Map();
const PLAYERS: Array<Player> = []; // 2 players [0][1]

const initialPropsPlayer1: InitialProps = {
  fil: 1,
  col: 1,
}; // name fil col player 1
const initialPropsPlayer2: InitialProps = {
  fil: 2,
  col: 1,
}; // name fil col player 2

const PLAYER1 = new Player(initialPropsPlayer1);
const PLAYER2 = new Player(initialPropsPlayer2); // player create

export default class App {
  enemies: Array <Enemy>;
  player1: Array <Image> = []; // images [a,b,c,d]
  player2: Array <Image> = []; // images [a,b,c,d]
  buffalo: Array <Image> = []; // images [a,b,c,d]
  zebra: Array <Image> = []; // images [a,b,c,d]
  screen: number = 4;
  count: number = 0;
  gui: Image;
  home: Image;
  rules: Image;
  bomb: Image;

  constructor(
    {
      player1, player2, buffalo, zebra, bombImage, sand, rock, shrub, race, gui, home, rules,
      // parameters
    } : IpropsApp,
  ) {
    this.enemies = []; // arr
    this.player1 = player1;// declare
    this.player2 = player2;// declare
    this.buffalo = buffalo;// declare
    this.zebra = zebra;// declare
    this.gui = gui;// declare
    this.home = home;// declare
    this.rules = rules;// declare
    this.bomb = bombImage;// declare

    PLAYERS.push(PLAYER2);
    PLAYERS.push(PLAYER1); // push no PLAYERS arr
    PLAYER1.setImage1(this.player1[0]);
    PLAYER1.setImage2(this.player1[1]); // image array player1
    PLAYER1.setImage3(this.player1[2]);
    PLAYER1.setImage4(this.player1[3]);
    // player 2
    PLAYER2.setImage1(this.player2[0]);
    PLAYER2.setImage2(this.player2[1]);
    PLAYER2.setImage3(this.player2[2]);
    PLAYER2.setImage4(this.player2[3]);
    PLAYER1.setMap(MAP);
    PLAYER2.setMap(MAP);
    // map
    MAP.setSand(sand);
    MAP.setRock(rock);
    MAP.setShrub(shrub);
    MAP.setRace(race);
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
      PLAYER1.move('UP'); // player1 movement
    }

    if (p.keyCode === p.DOWN_ARROW) {
      PLAYER1.move('DOWN');
    }
  }

  // eslint-disable-next-line class-methods-use-this
  movePlayer2(p:p5) {
    const K = p.key.toLocaleLowerCase();

    if (K === 'd') {
      PLAYER2.move('RIGHT');
    }

    if (K === 'a') {
      PLAYER2.move('LEFT'); // player2 movement
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
    const K = p.key.toLocaleLowerCase();
    if (K === 'p') {
      PLAYER1.putBomb(); // put bomb class App method
    }
  }

  // eslint-disable-next-line class-methods-use-this
  putBomb2(p:p5) {
    const K = p.key.toLocaleLowerCase();
    if (K === 'f') {
      PLAYER2.putBomb();// put bomb class App method
    }
  }

  keypress(p: p5) {
    this.movePlayer1(p);
    this.movePlayer2(p);
    this.putBomb1(p);
    this.putBomb2(p);
  }

  button(p:p5, xButton:number, yButton:number, wButton:number, hButton:number, screen:number) {
    const widthB = xButton + wButton;// put button App method
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

  mousePressed(p:p5) {
    this.buttonScreen0(p);
    this.buttonScreen1(p);
  }

  // eslint-disable-next-line class-methods-use-this
  showPlayers(p:p5) {
    PLAYERS.forEach((player) => {
      player.show(p); // ESTE ES MOSTRAR
    });
  }

  // eslint-disable-next-line class-methods-use-this
  setLevelPlayers(level:Array<Array<number>>) {
    PLAYERS.forEach((player) => {
      player.setLevel(level);
    });// ESTE ES SET LEVEL
  }

  showBombs(p:p5) {
    PLAYERS.forEach((player) => {
      player.showBomb(p, this.bomb);// ESTE ES MOSTRAR DE LA BOMBA
    });
  }

  showEnemies(p:p5) {
    this.enemies.forEach((enemy) => {
      enemy.setMap(MAP);
      enemy.show(p);
      enemy.dead();
      enemy.move(p);// ESTE ES MOSTRAR ENEMIGOS
      PLAYER1.dead(enemy.getFil(), enemy.getCol(), 1, 1);
      PLAYER2.dead(enemy.getFil(), enemy.getCol(), 2, 1);
      this.enemyDissapear(enemy);
    });
  }

  enemyDissapear(enemy: Enemy) {
    if (enemy.getDie() === true) {
      this.enemies.splice(this.enemies.indexOf(enemy), 1);// ESTE ES SPLICE DE ENEMIGOS
    }
  }

  killenemies() {
    PLAYERS.forEach((player) => {
      player.killEnemy(this.enemies);// ESTE ES EL KILL
    });
  }

  showGui(p:p5) {
    p.image(this.gui, 0, 0);
    p.fill(54, 18, 81);
    p.textSize(40);
    p.text(PLAYER1.getLives(), 45, 293);// ESTE ES MOSTRAR DEL GUI
    p.fill(0, 83, 38);
    p.text(PLAYER2.getLives(), 45, 563);
  }

  changeScreen(p:p5) {
    switch (this.screen) { // ESTE ES CAMBIO DE PANTALLAS
      case 0:
        p.image(this.home, 0, 0); // ESTE ES HOME
        break;

      case 1:
        p.image(this.rules, 0, 0); // ESTE ES INSTRUCCIONES
        break;

      case 2:
        MAP.show(p, MAP.level1);
        PLAYER2.show(p);
        PLAYER1.show(p);
        PLAYER1.showBomb(p, this.bomb);
        // PLAYER1.killEnemy(MAP, this.enemies); // ESTE ES MOSTRAR Y SET
        PLAYER1.setLevel(MAP.level1);
        PLAYER2.setLevel(MAP.level1);

        this.randomEnemy(p);
        this.enemies.forEach((enemy) => { // ESTE ES MOSTRAR ENEMIGOS
          enemy.show(p);
          enemy.dead();
          // enemy.move(p, LEVEL1.level1);
          PLAYER1.dead(enemy.getFil(), enemy.getCol(), 1, 1);
          PLAYER2.dead(enemy.getFil(), enemy.getCol(), 2, 1);
          if (enemy.getDie() === true) {
            this.enemies.splice(this.enemies.indexOf(enemy), 1);// SI ESTA DIE, HACER SPLICE
          }
        });
        p.image(this.gui, 0, 0);
        p.fill(54, 18, 81);
        p.textSize(40);
        p.text(PLAYER1.getLives(), 45, 293);
        p.fill(0, 83, 38);
        p.text(PLAYER2.getLives(), 45, 563);
        // screen += 1;
        // PLAYER2.setFil(17);
        // PLAYER2.setCol(13);
        // PLAYER2.truePosition();
        break;
      case 3:
        MAP.show(p, MAP.level2);
        PLAYER1.setLevel(MAP.level2);
        PLAYER2.setLevel(MAP.level2);

        PLAYER1.show(p);
        PLAYER2.show(p);

        p.image(this.gui, 0, 0);
        PLAYER1.setLives(3);
        PLAYER2.setLives(3);

        p.fill(54, 18, 81);
        p.textSize(40);
        p.text(PLAYER1.getLives(), 45, 293);
        p.fill(0, 83, 38);
        p.text(PLAYER2.getLives(), 45, 563);
        // LEVEL1.changeColor(p, PLAYER1.getX(), PLAYER1.getY());
        // screen += 1;
        // PLAYER2.setFil(17);
        // PLAYER2.setCol(13);
        // PLAYER2.truePosition();
        break;
      case 4:
        MAP.show(p, MAP.level3);
        this.showPlayers(p);
        this.setLevelPlayers(MAP.level3);
        this.showBombs(p);
        this.killenemies();
        this.randomEnemy(p);
        this.showEnemies(p);
        this.showGui(p);

        // PLAYER1.setLives(3);
        // PLAYER2.setLives(3);

        // screen += 1;
        break;

      default:
        break;
    }
  }

  // eslint-disable-next-line class-methods-use-this
  randomEnemy(p:p5) {
    if (p.frameCount % 200 === 0 && this.count < 15) { // ESTE ES EL RANDOM CON LIMITE DE 15
      const num = Math.round(p.random(1));
      const i = Math.floor(p.random(19));
      const j = Math.floor(p.random(15));

      const initialPropsEnemy: InitialProps = {
        fil: i,
        col: j, // COLUMNA Y FILA RAN
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
