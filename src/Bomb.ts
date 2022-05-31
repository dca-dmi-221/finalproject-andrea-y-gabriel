// import p5 from 'p5';
// import Enemy from './Enemy';
// import Map from './Map';

// interface BombProps {
//   x: number
//   y: number
// }

// class Bomb {
//   x;
//   y;
//   tileX: number;
//   tileY: number;
//   tileSize: number;
//   width: number;
//   height: number;
//   hasExplode: boolean;
//   constructor({ x, y }:BombProps) {
//     this.x = x;
//     this.y = y;
//     this.tileSize = 50;
//     this.tileX = Math.floor(this.x / this.tileSize);
//     this.tileY = Math.floor(this.y / this.tileSize);
//     this.width = 25;
//     this.height = 25;
//     this.hasExplode = false;
//   }

//   render(mapReference: Map, p: p5) {
//     p.fill(0, 255, 0);
//     p.rectMode(p.CENTER);
//     p.rect(this.x, this.y, this.width, this.height);
//     p.rectMode(p.CORNER);
//     this.destroyWall(mapReference);
//   }

//   destroyWall(mapReference: Map) {
//     setTimeout(() => {
//       if (mapReference.tileSet[this.tileY - 1][this.tileX] === 1) {
//         mapReference.tileSet[this.tileY - 1][this.tileX] = 0;
//       }
//       if (mapReference.tileSet[this.tileY + 1][this.tileX] === 1) {
//         mapReference.tileSet[this.tileY + 1][this.tileX] = 0;
//       }
//       if (mapReference.tileSet[this.tileY][this.tileX - 1] === 1) {
//         mapReference.tileSet[this.tileY][this.tileX - 1] = 0;
//       }
//       if (mapReference.tileSet[this.tileY][this.tileX + 1] === 1) {
//         mapReference.tileSet[this.tileY][this.tileX + 1] = 0;
//       }
//       return this.hasExplode = true;
//     }, 2000);
//   }

//   killEnemy(enemy: Enemy, p: p5) {
//     if (p.dist(this.tileX, this.tileY, enemy.x, enemy.y) < 75) {
//       //
//     }
//   }
// }

// export default Bomb;
