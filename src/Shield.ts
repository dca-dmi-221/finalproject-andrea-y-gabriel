import p5, { Image } from 'p5';

const SHIELDSIZE = 48;

export default class Shield {
  posX: number;
  posY: number;
  fil: number;
  col: number;
  image!: Image;

  constructor(pjFil:number, pjCol:number) {
    this.fil = pjFil;
    this.col = pjCol;
    this.posX = (this.fil * SHIELDSIZE) + 288;
    this.posY = (this.col * SHIELDSIZE);
  }

  show(p: p5) {
    p.image(this.image, this.posX - 9.5, this.posY - SHIELDSIZE);
  }

  setImage(i:Image) {
    this.image = i;
  }
}
