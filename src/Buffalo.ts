import { Image } from 'p5';
import Enemy from './Enemy';
import { InitialProps } from './Interface';

export default class Buffalo extends Enemy {
  constructor(
    { fil, col }: InitialProps,
    imageDown: Image,
    imageUp: Image,
    imageLeft: Image,
    imageRight: Image,
  ) {
    super(imageDown, imageUp, imageLeft, imageRight);
    this.fil = fil;
    this.col = col;
    this.lives = 2;
    this.points = 100;
  }
}
