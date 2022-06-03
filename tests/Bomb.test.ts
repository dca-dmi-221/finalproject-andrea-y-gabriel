import {
  expect, test, describe,
} from 'vitest';
// Edit an assertion and save to see HMR in action
// eslint-disable-next-line no-unused-vars
import Bomb from '../src/Bomb';

// eslint-disable-next-line no-unused-vars
const bomb = new Bomb(10, 10);

describe('../src/Bomb', () => {
  test('setImage()', () => {
    const expected = undefined;
    const result = bomb.setImage();
    expect(result).toStrictEqual(expected);
  });
});
