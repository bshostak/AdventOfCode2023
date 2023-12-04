import { test, expect } from '@playwright/test';
import { getAnswer } from '../src/day1/day1a';
import { getInput } from '../src/Helpers/gettingInput';
import { getAnswerTwo } from '../src/day1/day1b';

test.describe('Day 1 - Advent of Code 2023', () => {
  test('Part 1', async () => {
    expect(getAnswer(getInput('../data/day1.txt'))).toBe(54953);
  });

  test('Part 2', async () => {
    expect(getAnswerTwo(getInput('../data/day1.txt'))).toBe(53868);
  });
})
