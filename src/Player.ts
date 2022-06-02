import p5, { Image } from 'p5';
import Bomb from './Bomb';
import Enemy from './Enemy';
import Map from './Map';
import { PlayerDirection } from './Type';

const PLAYERSIZE = 48;
// small change
export default class Player {
  posX : number;
  posY: number;
  pcFil: number;
  pcCol: number;
  image1!: Image;
  image2!: Image;
  image3!: Image;
  image4!: Image;
  direction: string = 'DOWN';
  refMap!: Map;
  lives: number = 3;
  bombs: Array<Bomb> = [];

  constructor(fil: number, col: number) {
    this.pcFil = fil;
    this.pcCol = col;
    this.posX = (fil * PLAYERSIZE) + 288;
    this.posY = (col * PLAYERSIZE);
  }

  show(p: p5) {
    if (this.lives > 0) {
      if (this.direction === 'DOWN') {
        p.image(this.image1, this.posX - 9.5, this.posY - 48);
      } else if (this.direction === 'UP') {
        p.image(this.image2, this.posX - 9.5, this.posY - 48);
      } else if (this.direction === 'RIGHT') {
        p.image(this.image3, this.posX - 9.5, this.posY - 48);
      } else {
        p.image(this.image4, this.posX - 9.5, this.posY - 48);
      }
    }
  }

  move(direction: PlayerDirection, level: Array<Array<number>>) {
    switch (direction) {
      case 'DOWN':
        if (this.refMap.canMove(this.pcFil, this.pcCol + 1, level)) {
          this.pcCol += 1;
        }
        break;
      case 'UP':
        if (this.refMap.canMove(this.pcFil, this.pcCol - 1, level)) {
          this.pcCol -= 1;
        }
        break;
      case 'LEFT':
        if (this.refMap.canMove(this.pcFil - 1, this.pcCol, level)) {
          this.pcFil -= 1;
        }
        break;
      case 'RIGHT':
        if (this.refMap.canMove(this.pcFil + 1, this.pcCol, level)) {
          this.pcFil += 1;
        }
        break;
      default:
        break;
    }
    this.direction = direction;
    this.truePosition();
  }

  truePosition() {
    this.posX = (this.pcFil * PLAYERSIZE) + 288;
    this.posY = (this.pcCol * PLAYERSIZE);
  }

  putBomb() {
    this.bombs.push(new Bomb(this.pcFil, this.pcCol));
  }

  showBomb(p:p5, image:Image) {
    this.bombs.forEach((bomb) => {
      bomb.setImage(image);
      bomb.show(p);
      if (bomb.boom === true) {
        this.bombs.splice(this.bombs.indexOf(bomb), 1);
      }
    });
  }

  killEnemy(refMap: Map, enemies: Array<Enemy>) {
    this.bombs.forEach((bomb) => {
      bomb.bombBoom(refMap, enemies);
    });
  }

  dead(filEne: number, colEne: number, fil: number, col: number) {
    if (this.pcFil === filEne && this.pcCol === colEne && this.lives > 0) {
      this.lives -= 1;
      this.pcCol = col;
      this.pcFil = fil;
    }
  }

  getX() {
    return this.posX;
  }

  getY() {
    return this.posY;
  }

  getFil() {
    return this.pcFil;
  }

  getCol() {
    return this.pcCol;
  }

  getLives() {
    return this.lives;
  }

  setFil(fil: number) {
    this.pcFil = fil;
  }

  setCol(col: number) {
    this.pcCol = col;
  }

  setMap(m:Map) {
    this.refMap = m;
  }

  setImage1(i:Image) {
    this.image1 = i;
  }

  setImage2(i:Image) {
    this.image2 = i;
  }

  setImage3(i:Image) {
    this.image3 = i;
  }

  setImage4(i:Image) {
    this.image4 = i;
  }
}