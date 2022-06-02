import {
  describe,
  expect, test,
} from 'vitest';
// eslint-disable-next-line no-unused-vars
import Enemy from '../src/Enemy';

// Edit an assertion and save to see HMR in action
// eslint-disable-next-line no-unused-vars
const enemy = new Enemy();

describe('../src/Enemy', () => {
  test('dead()', () => {
    expect(enemy.die).toStrictEqual(false);
  });
});

describe('../src/EnemyTruePos', () => {
  test('truePosition()', () => {
    const expected = enemy.posX;
    const result = enemy.truePosition();
    expect(result).toStrictEqual(expected);
  });
});

describe('../src/EnemyLives', () => {
  test('lives', () => {
    const expected = enemy.lives;
    const result = enemy.getLives();
    expect(result).toStrictEqual(expected);
  });
});

describe('../src/EnemyDie', () => {
  test('dead', () => {
    const expected = enemy.die;
    const result = enemy.getDie();
    expect(result).toStrictEqual(expected);
  });
});

describe('../src/EnemyCol', () => {
  test('col', () => {
    const expected = enemy.col;
    const result = enemy.getCol();
    expect(result).toStrictEqual(expected);
  });
});

describe('../src/EnemyFil', () => {
  test('FIL', () => {
    const expected = enemy.fil;
    const result = enemy.getFil();
    expect(result).toStrictEqual(expected);
  });
});

describe('../src/lessLives', () => {
  test('lives', () => {
    const expected = enemy.lives - 1;
    const result = enemy.lessLives();
    expect(result).toStrictEqual(expected);
  });
}); // ok
