import p5 from 'p5';
import Map from './Map';
import { PlayerDirection } from './Type';

const PLAYERSIZE = 48;

export default class Player {
  posX : number;
  posY: number;
  pcFil: number;
  pcCol: number;
  image1: any;
  image2: any;
  image3: any;
  image4: any;
  direction: string;

  refMap: Map | null = null;

  constructor(fil: number, col: number) {
    this.pcFil = fil;
    this.pcCol = col;
    this.direction = 'DOWN';
    this.posX = (fil * PLAYERSIZE) + 288; // + 312;
    this.posY = (col * PLAYERSIZE);
    this.refMap = null;
    // this.image1 = p.loadImage('../assests/Player/player1A.png');
    // this.image2 = p.loadImage('../assests/Player/playerB.png');
    // this.image3 = p.loadImage('../assests/Player/player1C.png');
    // this.image4 = p.loadImage('../assests/Player/player1D.png');
  }

  show(p: p5) {
    p.fill(180, 10, 200);
    p.rect(this.posX, this.posY, PLAYERSIZE);
    p.rectMode(p.CORNER);
    // p.imageMode(p.CENTER);
    // if (this.d === 0) {
    //   p.image(this.image1, this.posX, this.posY);
    // } else if (this.d === 1) {
    //   p.image(this.image2, this.posX, this.posY);
    // } else if (this.d === 2) {
    //   p.image(this.image3, this.posX, this.posY);
    // } else {
    //   p.image(this.image4, this.posX, this.posY);
    // }
    // p.imageMode(p.CORNER);
  }

  move(direction: PlayerDirection) {
    switch (direction) {
      case 'RIGHT':
        if (this.refMap?.canMove(this.pcFil, this.pcCol + 1)) {
          this.pcCol += 1;
        }
        break;
      case 'LEFT':
        if (this.refMap?.canMove(this.pcFil, this.pcCol - 1)) {
          this.pcCol -= 1;
        }
        break;
      case 'UP':
        if (this.refMap?.canMove(this.pcFil - 1, this.pcCol)) {
          this.pcFil -= 1;
        }
        break;
      case 'DOWN':
        if (this.refMap?.canMove(this.pcFil + 1, this.pcCol)) {
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
    this.posX = (this.pcCol * PLAYERSIZE) + 288;
    this.posY = (this.pcFil * PLAYERSIZE);
  }

  setMap(m:Map) {
    this.refMap = m;
  }
}
