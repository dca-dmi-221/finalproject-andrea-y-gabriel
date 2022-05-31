import p5, { Image } from 'p5';
import Map from './Map';
import { PlayerDirection } from './Type';

const PLAYERSIZE = 48;

export default class Player {
  posX : number;
  posY: number;
  pcFil: number;
  pcCol: number;
  imageActual!: Image;
  image1!: Image;
  image2!: Image;
  image3!: Image;
  image4!: Image;
  direction: string;
  refMap: Map | null = null;

  constructor(fil: number, col: number) {
    this.pcFil = fil;
    this.pcCol = col;
    this.direction = 'DOWN';
    this.posX = (fil * PLAYERSIZE) + 288;
    this.posY = (col * PLAYERSIZE);
    this.refMap = null;
  }

  show(p: p5) {
    // p.image(this.imageActual, this.posX - 9.5, this.posY - 48);
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

  move(direction: PlayerDirection, level: Array<Array<number>>) {
    switch (direction) {
      case 'DOWN':
        if (this.refMap?.canMove(this.pcFil, this.pcCol + 1, level)) {
          this.pcCol += 1;
        }
        break;
      case 'UP':
        if (this.refMap?.canMove(this.pcFil, this.pcCol - 1, level)) {
          this.pcCol -= 1;
        }
        break;
      case 'LEFT':
        if (this.refMap?.canMove(this.pcFil - 1, this.pcCol, level)) {
          this.pcFil -= 1;
        }
        break;
      case 'RIGHT':
        if (this.refMap?.canMove(this.pcFil + 1, this.pcCol, level)) {
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

  setMap(m:Map) {
    this.refMap = m;
  }

  setImage(i:Image) {
    this.imageActual = i;
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
