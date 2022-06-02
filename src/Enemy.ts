import p5, { Image } from 'p5';
import Map from './Map';

const SIZE = 48;

export default class Enemy {
  posX : number;
  posY: number;
  fil: number;
  col: number;
  refMap!: Map;
  image1!: Image;
  image2!: Image;
  image3!: Image;
  image4!: Image;
  direction: number = 0;
  die: boolean = false;
  lives!: number;

  constructor(fil: number, col: number, i1: Image, i2: Image, i3: Image, i4: Image) {
    this.fil = fil;
    this.col = col;
    this.image1 = i1;
    this.image2 = i2;
    this.image3 = i3;
    this.image4 = i4;
    this.posX = (this.fil * SIZE) + 288;
    this.posY = (this.col * SIZE);
  }

  show(p:p5) {
    p.imageMode(p.CENTER);
    if (this.direction === 0) {
      p.image(this.image1, this.posX + 24, this.posY);
    } else if (this.direction === 1) {
      p.image(this.image2, this.posX + 24, this.posY);
    } else if (this.direction === 2) {
      p.image(this.image4, this.posX + 24, this.posY);
    } else {
      p.image(this.image3, this.posX + 24, this.posY);
    }
    p.imageMode(p.CORNER);
  }

  moveDown() {
    if (this.refMap.canMove(this.fil, this.col + 1, this.refMap.level3)) {
      this.col += 1;
    }
  }

  moveUp() {
    if (this.refMap.canMove(this.fil, this.col - 1, this.refMap.level3)) {
      this.col -= 1;
    }
  }

  moveLeft() {
    if (this.refMap.canMove(this.fil - 1, this.col, this.refMap.level3)) {
      this.fil -= 1;
    }
  }

  moveRight() {
    if (this.refMap.canMove(this.fil + 1, this.col, this.refMap.level3)) {
      this.fil += 1;
    }
  }

  move(p:p5) {
    let dir: number = 0;
    if (p.frameCount % 40 === 0) {
      dir = Math.round(p.random(3));
      // eslint-disable-next-line default-case
      switch (this.direction) {
        case 0:
          this.moveDown();
          break;
        case 1:
          this.moveUp();
          break;
        case 2:
          this.moveLeft();
          break;
        case 3:
          this.moveRight();
          break;
      }
      this.direction = dir;
    }
    this.truePosition();
  }

  truePosition() {
    this.posX = (this.fil * SIZE) + 288;
    this.posY = (this.col * SIZE);
  }

  dead(): boolean {
    if (this.lives === 0) {
      this.die = true;
    }
    return this.die;
  }

  lessLives() {
    this.lives -= 1;
  }

  getFil() {
    return this.fil;
  }

  getCol() {
    return this.col;
  }

  getLives() {
    return this.lives;
  }

  getDie() {
    return this.die;
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

  setMap(m:Map) {
    this.refMap = m;
  }
}
// test
