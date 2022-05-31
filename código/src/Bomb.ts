import p5 from 'p5';
import Enemy from './Enemy';
import Map from './Map';

const BOMBSIZE = 48;

export default class Bomb {
  x;
  y;
  fil: number;
  col: number;
  hasExplode: boolean;
  refMap: Map | null = null;

  constructor(fil: number, col: number) {
    this.fil = fil;
    this.col = col;
    this.hasExplode = false;
    this.x = (fil * BOMBSIZE) + 288;
    this.y = (col * BOMBSIZE);
    this.refMap = null;
  }

  render(p: p5) {
    p.fill(0, 255, 0);
    p.rectMode(p.CENTER);
    p.rect(this.x, this.y, BOMBSIZE, BOMBSIZE);
    p.rectMode(p.CORNER);
    this.destroyWall();
  }

  destroyWall() {
    setTimeout(() => {
      if (this.refMap?.level1[this.fil][this.col - 1] === 1) {
        this.refMap?.level1[this.fil][this.col - 1] = 0;
      }
      if (this.refMap?.level1[this.fil][this.col + 1] === 1) {
        this.refMap?.level1[this.fil][this.col + 1] = 0;
      }
      if (this.refMap?.level1[this.fil - 1][this.col] === 1) {
        this.refMap?.level1[this.fil - 1][this.col] = 0;
      }
      if (this.refMap?.level1[this.fil + 1][this.col] === 1) {
        this.refMap?.level1[this.fil + 1][this.col] = 0;
      }
      return this.hasExplode = true;
    }, 2000);
  }

  killEnemy(enemy: Enemy, p: p5) {
    if (p.dist(this.fil, this.col, enemy.fil, enemy.col) < BOMBSIZE / 2) {
      //
    }
  }

  setMap(m:Map) {
    this.refMap = m;
  }
}
