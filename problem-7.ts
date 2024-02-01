// Create a TypeScript function called findFirstOccurrence that accepts an array and a value to search for. Use generics to make the function work with arrays of any data type. Inside the function, find and return the index of the first occurrence of the value in the array. If the value is not found in the array, return -1 to indicate that. Create sample arrays of different data types (e.g., numbers, strings) and call the findFirstOccurrence function for each of them to display the results.

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
