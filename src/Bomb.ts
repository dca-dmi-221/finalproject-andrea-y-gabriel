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
  lessLives: boolean = true;

  constructor(pjFil:number, pjCol:number) {
    this.fil = pjFil;
    this.col = pjCol;
    this.posX = (this.fil * BOMBSIZE) + 288;
    this.posY = (this.col * BOMBSIZE);
  }

  show(p: p5) { // n?
    p.image(this.image, this.posX, this.posY);
  }

  destroyRightShrub(refMap: Map) {
    if (refMap.level1[this.col][this.fil + 1] === 2) {
      // eslint-disable-next-line no-param-reassign
      refMap.level1[this.col][this.fil + 1] = 0;
    }
  }

  destroyLeftShrub(refMap: Map) {
    if (refMap.level1[this.col][this.fil - 1] === 2) {
      // eslint-disable-next-line no-param-reassign
      refMap.level1[this.col][this.fil - 1] = 0;
    }
  }

  destroyUpShrub(refMap: Map) {
    if (refMap.level1[this.col - 1][this.fil] === 2) {
      // eslint-disable-next-line no-param-reassign
      refMap.level1[this.col - 1][this.fil] = 0;
    }
  }

  destroyDownShrub(refMap: Map) {
    if (refMap.level1[this.col + 1][this.fil] === 2) {
      // eslint-disable-next-line no-param-reassign
      refMap.level1[this.col + 1][this.fil] = 0;
    }
  }

  destroyShrub(refMap: Map): boolean {
    this.destroyDownShrub(refMap);
    this.destroyUpShrub(refMap);
    this.destroyLeftShrub(refMap);
    this.destroyRightShrub(refMap);
    // eslint-disable-next-line no-return-assign
    return this.boom = true;
  }

  bombBoom(refMap: Map, enemies: Array<Enemy>): void {
    setTimeout(() => {
      this.destroyShrub(refMap);
      this.killEnemy(enemies);
    }, 1000);
  }

  killEnemy(enemies: Array<Enemy>): void {
    if (this.lessLives === true) {
      for (let i = 0; i < enemies.length; i += 1) {
        const enemy = enemies[i];
        if ((enemy.fil === this.fil + 1 && enemy.col === this.col)
      || (enemy.fil === this.fil - 1 && enemy.col === this.col)
      || (enemy.col === this.col + 1 && enemy.fil === this.fil)
      || (enemy.col === this.col - 1 && enemy.fil === this.fil)
      || (enemy.fil === this.fil && enemy.col === this.col)) {
          enemy.lessLives();
          this.lessLives = false;
        }
      }
    }
  }

  setImage(i:Image) {
    this.image = i;
  }
}
