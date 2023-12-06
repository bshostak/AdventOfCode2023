export type CubeCount = { red: number; green: number; blue: number };

export function possibleGames(input: string[], targetCubes: CubeCount): number {
  let possibleGameIds: number[] = [];

  /**
   * Loop through input and for each line we need to extract:
   * GameId, total red cubes, total blue cubes, and total green cubes.
   * However, each game has different rolls so we need to check each roll to see what cubes came out of each roll.
   * Each roll per line is separated by ; so we can split the line by ; to get each roll.
   */
  input.forEach((line) => {
    const gameId = parseInt(line.split(':')[0].split(' ')[1].trim());
    const rolls = line.split(':')[1].split(';');
    let isPossible = true;
    rolls.forEach((roll) => {
      const currentCubes: CubeCount = { red: 0, green: 0, blue: 0 };
      const cubes = roll.split(',').map((cube) => cube.trim());
      cubes.forEach((cube) => {
        const number = Number(cube.split(' ')[0]);
        if (cube.includes('red')) {
          currentCubes.red += number;
          if (currentCubes.red > targetCubes.red) {
            isPossible = false;
          }
        } else if (cube.includes('green')) {
          currentCubes.green += number;
          if (currentCubes.green > targetCubes.green) {
            isPossible = false;
          }
        } else if (cube.includes('blue')) {
          currentCubes.blue += number;
          if (currentCubes.blue > targetCubes.blue) {
            isPossible = false;
          }
        }
      });
      if (!isPossible) {
        return;
      }
    });
    if (isPossible) {
      possibleGameIds.push(gameId);
    }
  });
  return possibleGameIds.reduce((sum, currentId) => sum + currentId, 0);
}
