import { CubeCount } from "./day2a";

/**
 * The question asks for the minimum number of cubes of each color that could have been in the bag to make each game possible.
 * This is equivalent to the maximum number of cubes of each color that appears in any single roll in each game. 
 * This is because if there were fewer cubes of a certain color in the bag than the maximum number that appears in a single roll, 
 * then that roll (and therefore the game) would not have been possible.
 * @param input txt input
 * @returns totalPower
 */
export function minimumCubes(input: string[]): number {
  let totalPower = 0;

  input.forEach((line) => {
    const gameId = parseInt(line.split(':')[0].split(' ')[1].trim());
    const rolls = line.split(':')[1].split(';');
    let maxCubes: CubeCount = { red: 0, green: 0, blue: 0 };
    rolls.forEach((roll) => {
      const currentCubes: CubeCount = { red: 0, green: 0, blue: 0 };
      const cubes = roll.split(',').map((cube) => cube.trim());
      cubes.forEach((cube) => {
        const number = Number(cube.split(' ')[0]);
        if (cube.includes('red')) {
          currentCubes.red += number;
          if (currentCubes.red > maxCubes.red) {
            maxCubes.red = currentCubes.red;
          }
        } else if (cube.includes('green')) {
          currentCubes.green += number;
          if (currentCubes.green > maxCubes.green) {
            maxCubes.green = currentCubes.green;
          }
        } else if (cube.includes('blue')) {
          currentCubes.blue += number;
          if (currentCubes.blue > maxCubes.blue) {
            maxCubes.blue = currentCubes.blue;
          }
        }
      });
    });
    const power = maxCubes.red * maxCubes.green * maxCubes.blue;
    totalPower += power;
  });

  return totalPower;
}
