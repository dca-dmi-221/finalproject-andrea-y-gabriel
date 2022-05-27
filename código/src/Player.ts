import p5 from 'p5';

export default class Player {
  posX : number;
  posY: number;
  b: number;

  constructor() {
    this.posX = 175;
    this.posY = 175;
    this.b = 25;
  }

  show(p:p5) {
    p.fill(10, 180, 10);
    p.rect(this.posX, this.posY, this.b, this.b);
  }
}
