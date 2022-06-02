import p5, { Image } from 'p5';
import Enemy from './Enemy';
import Map from './Map';

const BOMBSIZE = 48;

export default class Bomb {
  posX: number;
  posY: number;
  fil: number;
  col: number;
  boom: boolean = false;
  image!: Image;
  putBomb: boolean = false;

  constructor(pjFil:number, pjCol:number) {
    this.fil = pjFil;
    this.col = pjCol;
    this.posX = (this.fil * BOMBSIZE) + 288;
    this.posY = (this.col * BOMBSIZE);
  }

  show(p: p5) {
    p.image(this.image, this.posX, this.posY);
  }

  destroyShrub(refMap: Map) {
    if (refMap.level1[this.col][this.fil + 1] === 2) {
      // eslint-disable-next-line no-param-reassign
      refMap.level1[this.col][this.fil + 1] = 0;
    }
    if (refMap.level1[this.col][this.fil - 1] === 2) {
      // eslint-disable-next-line no-param-reassign
      refMap.level1[this.col][this.fil - 1] = 0;
    }
    if (refMap.level1[this.col - 1][this.fil] === 2) {
      // eslint-disable-next-line no-param-reassign
      refMap.level1[this.col - 1][this.fil] = 0;
    }
    if (refMap.level1[this.col + 1][this.fil] === 2) {
      // eslint-disable-next-line no-param-reassign
      refMap.level1[this.col + 1][this.fil] = 0;
    }
    // eslint-disable-next-line no-return-assign
    return this.boom = true;
  }

  bombBoom(refMap: Map, enemies: Array<Enemy>) {
    setTimeout(() => {
      this.destroyShrub(refMap);
      this.killEnemy(enemies);
    }, 2000);
  }

  killEnemy(enemies: Array<Enemy>): void {
    for (let i = 0; i < enemies.length; i += 1) {
      const enemy = enemies[i];
      // eslint-disable-next-line max-len
      if (enemy.fil === this.fil + 1 || enemy.fil === this.fil - 1 || enemy.col === this.col + 1 || enemy.col === this.col - 1) {
        enemy.lessLives();
      }
    }
  }

  setImage(i:Image) {
    this.image = i;
  }
}
