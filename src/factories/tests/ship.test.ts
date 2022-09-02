import { describe, expect, test } from '@jest/globals';
import { Ship } from '../ship';

describe('Ship module', () => {
  test('create ship of length 5', () => {
    expect(new Ship(5).length).toBe(5);
  });
});

