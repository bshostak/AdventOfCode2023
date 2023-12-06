import { readFileSync } from 'fs';
import path from 'path';

/**
 * 
 * @param dataPath path to the txt file
 * @returns an array of strings, each string is a line from the txt file
 */
export function getInput(dataPath: string): string[] {
  const filePath = path.join(__dirname, dataPath);
  return readFileSync(filePath).toString().trim().split('\n');
}
