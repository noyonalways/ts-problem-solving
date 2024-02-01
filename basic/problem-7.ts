// Problem 7:
function findFirstOccurrence<T>(arr: T[], value: T): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

// Example usage:
const numbers: number[] = [99, 23, 62, 88, 100];
const strings: string[] = ["apple", "banana", "cherry", "date", "apple"];
const targetNumber = 88;
const targetString = "banana";
const numberIndex = findFirstOccurrence(numbers, targetNumber);
const stringIndex = findFirstOccurrence(strings, targetString);
console.log(numberIndex); // 3
console.log(stringIndex); // 1
