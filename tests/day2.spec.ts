import { test, expect } from '@playwright/test';
import { CubeCount, possibleGames } from '../src/day2/day2a';
import { getInput } from '../src/Helpers/gettingInput';

test.describe('Day 2 - Advent of Code 2023', () => {
  test('Part 1', async () => {
    const targetCubes: CubeCount = { red: 12, green: 13, blue: 14 };
    const result = possibleGames(getInput('../data/day2.txt'), targetCubes);
    expect(result).toBe(2512)
  });

  test('Part 2', async () => {
    
  });
});