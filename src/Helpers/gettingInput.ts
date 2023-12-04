import { readFileSync } from 'fs';
import path from 'path';

export function getInput(dataPath: string): string {
  const filePath = path.join(__dirname, dataPath);
  return readFileSync(filePath).toString().trim();
}
