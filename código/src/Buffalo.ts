// import p5, { Image } from 'p5';
import { Image } from 'p5';
import Enemy from './Enemy';

export default class Buffalo extends Enemy {
  lives: number;

  constructor(fil:number, col:number, i1: Image, i2: Image, i3: Image, i4: Image) {
    super(fil, col, i1, i2, i3, i4);
    this.lives = 2;
  }

  dead(): boolean {
    let result: boolean = false;
    if (this.lives === 0) {
      result = true;
    }
    return result;
  }
}
