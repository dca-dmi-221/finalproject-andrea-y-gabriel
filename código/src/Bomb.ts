import p5, { Image } from 'p5';
import Enemy from './Enemy';
import Map from './Map';

const BOMBSIZE = 48;

export default class Bomb {
  x;
  y;
  fil: number;
  col: number;
  boom: boolean;
  refMap: Map | null = null;
  image!: Image;

  constructor(fil: number, col: number) {
    this.fil = fil;
    this.col = col;
    this.boom = false;
    this.x = (fil * BOMBSIZE) + 288;
    this.y = (col * BOMBSIZE);
    this.refMap = null;
  }

  show(p: p5) {
    p.fill(0, 255, 0);
    p.image(this.image, this.x, this.y);
    // this.destroyWall();
  }

  destroyWall(refMap: Map/* ,  level: Array<Array<number>> */) {
    setTimeout(() => {
      if (refMap.level1[this.fil][this.col - 1] === 1) {
        refMap.level1[this.fil][this.col - 1] = 0;
      }
      if (refMap.level1[this.fil][this.col + 1] === 1) {
        refMap.level1[this.fil][this.col + 1] = 0;
      }
      if (refMap.level1[this.fil - 1][this.col] === 1) {
        refMap.level1[this.fil - 1][this.col] = 0;
      }
      if (refMap.level1[this.fil + 1][this.col] === 1) {
        refMap.level1[this.fil + 1][this.col] = 0;
      }
      return this.boom = true;
    }, 2000);
  }

  kill(p:p5, enemy: Enemy, enemyArray: Array<Enemy>) {
    if (p.dist(this.fil, this.col, enemy.fil, enemy.col) < BOMBSIZE / 2) {
      enemyArray.splice(enemyArray.indexOf(enemy), 1);
    }
  }

  setMap(m:Map) {
    this.refMap = m;
  }
}
