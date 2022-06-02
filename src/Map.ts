import p5, { Image } from 'p5';

const SIZE = 48;

export default class Map {
  r: number;
  g: number;
  b: number;
  sand!: Image;
  rock!: Image;
  shrub!: Image;
  race!: Image;
  purple!: Image;
  green!: Image;

  constructor() {
    this.r = 255;
    this.g = 255;
    this.b = 255;
  }

  level1: Array<Array<number>> = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 3, 3, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1],
    [1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1],
    [1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
    [1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
    [1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 3, 0, 0, 1],
    [1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 3, 0, 0, 1],
    [1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ];

  level2: Array<Array<number>> = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 3, 2, 2, 2, 1, 1, 1, 2, 0, 0, 2, 1, 0, 2, 2, 1, 0, 1],
    [1, 0, 2, 0, 1, 2, 1, 0, 2, 0, 0, 2, 1, 2, 2, 2, 1, 0, 1],
    [1, 2, 1, 0, 1, 0, 1, 0, 0, 2, 2, 0, 1, 0, 2, 2, 0, 0, 1],
    [1, 1, 2, 0, 1, 2, 0, 2, 1, 1, 1, 1, 1, 2, 2, 1, 2, 1, 1],
    [1, 2, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 1, 1],
    [1, 2, 2, 1, 2, 2, 0, 1, 1, 1, 1, 1, 0, 0, 2, 1, 2, 2, 1],
    [1, 0, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 2, 2, 1, 2, 0, 0, 1, 1, 1, 1, 1, 0, 2, 2, 1, 2, 2, 1],
    [1, 1, 2, 1, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 2, 1],
    [1, 1, 2, 1, 2, 2, 1, 1, 1, 1, 1, 2, 0, 2, 1, 0, 2, 1, 1],
    [1, 0, 0, 2, 2, 0, 1, 0, 2, 2, 0, 0, 1, 0, 1, 0, 1, 2, 1],
    [1, 0, 1, 2, 2, 2, 1, 2, 0, 0, 2, 0, 1, 2, 1, 2, 2, 0, 1],
    [1, 0, 1, 2, 2, 0, 1, 2, 0, 0, 2, 1, 1, 1, 2, 2, 2, 3, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ];

  level3: Array<Array<number>> = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 1],
    [1, 0, 0, 2, 0, 2, 0, 2, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 1],
    [1, 2, 2, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 2, 2, 2, 1],
    [1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1],
    [1, 2, 2, 2, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 2, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 1],
    [1, 0, 0, 2, 0, 2, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 1],
    [1, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ];

  show(p:p5, level: Array<Array<number>>) {
    for (let i = 0; i < 15; i += 1) {
      for (let j = 0; j < 19; j += 1) {
        if (level[i][j] === 1) {
          p.image(this.sand, (j * SIZE) + 288, (i * SIZE));
          p.image(this.rock, (j * SIZE) + 288, (i * SIZE));
        } else if (level[i][j] === 2) {
          p.image(this.sand, (j * SIZE) + 288, (i * SIZE));
          p.image(this.shrub, (j * SIZE) + 288, (i * SIZE));
        } else if (level[i][j] === 3) {
          p.image(this.sand, (j * SIZE) + 288, (i * SIZE));
          p.image(this.race, (j * SIZE) + 288, (i * SIZE));
        } else if (level[i][j] === 4) {
          p.image(this.purple, (j * SIZE) + 288, (i * SIZE));
        } else if (level[i][j] === 5) {
          p.image(this.green, (j * SIZE) + 288, (i * SIZE));
        } else {
          p.fill(this.r, this.g, this.b);
          p.image(this.sand, (j * SIZE) + 288, (i * SIZE));
        }
      }
    }
  }

  // eslint-disable-next-line class-methods-use-this
  canMove(fil: number, col: number, level: Array<Array<number>>): boolean {
    let result: boolean = false;
    switch (level[col][fil]) {
      case 1:
        result = false;
        break;
      case 2:
        result = false;
        break;
      default:
        result = true;
        break;
    }
    return result;
  }

  changeColorPurple(fil:number, col:number) { // nueva funcion
    for (let i = 0; i < 15; i += 1) {
      for (let j = 0; j < 19; j += 1) {
        if (this.level2[i][j] === this.level2[col][fil]) {
          this.level2[col][fil] = 4;
        }
      }
    }
  }

  countPurpleSpace() {
    let spaces: number = 0;
    for (let i = 0; i < 15; i += 1) {
      for (let j = 0; j < 19; j += 1) {
        if (this.level2[i][j] === 4) {
          spaces += 1;
        }
      }
    }
    return spaces;
  }

  changeColorGreen(fil:number, col:number) { // nueva funcion
    for (let i = 0; i < 15; i += 1) {
      for (let j = 0; j < 19; j += 1) {
        if (this.level2[i][j] === this.level2[col][fil]) {
          this.level2[col][fil] = 5;
        }
      }
    }
  }

  countGreenSpace() {
    let spaces: number = 0;
    for (let i = 0; i < 15; i += 1) {
      for (let j = 0; j < 19; j += 1) {
        if (this.level2[i][j] === 5) {
          spaces += 1;
        }
      }
    }
    return spaces;
  }

  setSand(i:Image) {
    this.sand = i;
  }

  setRock(i:Image) {
    this.rock = i;
  }

  setShrub(i:Image) {
    this.shrub = i;
  }

  setRace(i:Image) {
    this.race = i;
  }

  setPurple(i:Image) {
    this.purple = i;
  }

  setGreen(i:Image) {
    this.green = i;
  }
}
