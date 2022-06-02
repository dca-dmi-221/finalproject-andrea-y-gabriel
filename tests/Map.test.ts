import {
  expect, test, describe,
} from 'vitest';

import Map from '../src/Map';

const map = new Map();

/* eslint-disable no-undef */
describe('../src/Map sand', () => {
  test('truePosition()', () => {
    const expected = undefined;
    const result = map.setSand();
    expect(result).toStrictEqual(expected);
  });
});

describe('../src/Map rock', () => {
  test('truePosition()', () => {
    const expected = undefined;
    const result = map.setRock();
    expect(result).toStrictEqual(expected);
  });
});

describe('../src/Map shrub', () => {
  test('truePosition()', () => {
    const expected = undefined;
    const result = map.setShrub();
    expect(result).toStrictEqual(expected);
  });
});
describe('../src/Map race', () => {
  test('truePosition()', () => {
    const expected = undefined;
    const result = map.setRace();
    expect(result).toStrictEqual(expected);
  });
});
describe('../src/Map PURPLE', () => {
  test('truePosition()', () => {
    const expected = undefined;
    const result = map.setPurple();
    expect(result).toStrictEqual(expected);
  });
});
describe('../src/Map green', () => {
  test('truePosition()', () => {
    const expected = undefined;
    const result = map.setGreen();
    expect(result).toStrictEqual(expected);
  });
});
