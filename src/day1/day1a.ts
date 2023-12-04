export function getAnswer(input: string): number {
  // Split the input string into lines
  const lines = input.split('\n');

  // Initialize a variable to store the total sum
  let sum = 0;

  // Loop over each line
  for (const line of lines) {
    // Split the line into characters
    const chars = line.split('');

    // Initialize an array to store the digits
    const digits: number[] = [];

    // Loop over each character
    for (const char of chars) {
      // Parse the character as an integer
      const number = parseInt(char);

      // If the parsed number is not NaN, add it to the digits array
      if (!isNaN(number)) {
        digits.push(number);
      }
    }

    // If there are any digits, add the first and last digit to the sum
    if (digits.length > 0) {
      const firstDigit = digits[0];
      const lastDigit = digits[digits.length - 1];
      sum += parseInt('' + firstDigit + lastDigit);
    }
  }

  // Return the total sum
  return sum;
}
