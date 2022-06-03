import p5, { Image } from 'p5';
import Map from './Map';

const SIZE = 48;

export default class Enemy {
  posX : number;
  posY: number;
  fil!: number;
  col!: number;
  refMap!: Map;
  imageDown!: Image;
  imageUp!: Image;
  imageLeft!: Image;
  imageRight!: Image;
  direction: number = 0;
  die: boolean = false;
  lives!: number;
  points!: number;

  constructor(imageDown: Image, imageUp: Image, imageLeft: Image, imageRight: Image) {
    this.imageDown = imageDown;
    this.imageUp = imageUp;
    this.imageLeft = imageLeft;
    this.imageRight = imageRight;
    this.posX = (this.fil * SIZE) + 288;
    this.posY = (this.col * SIZE);
  }

  show(p:p5): void {
    p.imageMode(p.CENTER);
    if (this.direction === 0) {
      p.image(this.imageDown, this.posX + 24, this.posY);
    } else if (this.direction === 1) {
      p.image(this.imageUp, this.posX + 24, this.posY);
    } else if (this.direction === 2) {
      p.image(this.imageLeft, this.posX + 24, this.posY);
    } else {
      p.image(this.imageRight, this.posX + 24, this.posY);
    }
    p.imageMode(p.CORNER);
  }

  moveDown(): void {
    if (this.refMap.canMove(this.fil, this.col + 1, this.refMap.level3)) {
      this.col += 1;
    }
  }

  moveUp(): void {
    if (this.refMap.canMove(this.fil, this.col - 1, this.refMap.level3)) {
      this.col -= 1;
    }
  }

  moveLeft(): void {
    if (this.refMap.canMove(this.fil - 1, this.col, this.refMap.level3)) {
      this.fil -= 1;
    }
  }

  moveRight(): void {
    if (this.refMap.canMove(this.fil + 1, this.col, this.refMap.level3)) {
      this.fil += 1;
    }
  }

  move(p:p5): void {
    let dir: number = 0;
    if (p.frameCount % 40 === 0) { // tiempo que se demora en hacer un cambio de movimiento
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

  truePosition(): void {
    this.posX = (this.fil * SIZE) + 288;
    this.posY = (this.col * SIZE);
  }

  dead(): boolean {
    if (this.lives === 0) {
      this.die = true;
    }
    return this.die;
  }

  lessLives(): void {
    this.lives -= 1;
  }

  getFil(): number {
    return this.fil;
  }

  getCol(): number {
    return this.col;
  }

  getLives(): number {
    return this.lives;
  }

  getPoints(): number { // nueva función
    return this.points;
  }

  getDie(): boolean {
    return this.die;
  }

  setMap(m:Map): void {
    this.refMap = m;
  }
}
// test
