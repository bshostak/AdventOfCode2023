export function getAnswerTwo(input: string[]): number {
  // Define the word-digit mapping
  const wordDigitMapping = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'].map(
    (word, index) => <const>[word, index + 1]
  );

  // Split the input string into lines
  const lines = input;

  // Map over each line
  const processedLines = lines.map((line) => {
    // Split the line into characters
    const chars = line.split('');

    // Map over each character
    const digits = chars.map((char, i) => {
      // Check if the current slice of the line starts with any of the words in the word-digit mapping
      const wordDigit = wordDigitMapping
        .filter(([word]) => line.slice(i).startsWith(word))
        .map(([, number]) => number)
        .at(0);

      // If a word-digit was found, return it, otherwise parse the character as an integer
      return wordDigit ?? parseInt(char);
    });

    // Filter out any non-numeric values (NaNs)
    const numericDigits = digits.filter((number) => !!number);

    // Concatenate the first and last digit and parse the result as an integer
    return parseInt('' + numericDigits[0] + numericDigits[numericDigits.length - 1]);
  });

  // Sum up all the values from the processed lines
  const sum = processedLines.reduce((a, b) => a + b, 0);

  // Return the total sum
  return sum;
}
