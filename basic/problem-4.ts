// Problem 4:
type MixedData = (string | number)[];
const mixedData: MixedData = [
  1,
  "one",
  "two",
  2,
  3,
  "three",
  4,
  "four",
  5,
  "five",
];

// Using for loop
function calculateNumberSum(arr: MixedData): number {
  let total = 0;
  for (const item of arr) {
    if (typeof item === "number") {
      total += item;
    }
  }
  return total;
}
console.log(addNumbers(mixedData));

// Using the filter() method
function calculateTotal(arr: MixedData): number {
  let total: number = 0;
  const numbers = arr.filter(
    (item): item is number => typeof item === "number"
  );
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}
console.log(calculateTotal(mixedData));

// Using the reduce() method
function addNumbers(arr: MixedData): number {
  return arr.reduce((total: number, item) => {
    if (typeof item === "number") {
      return total + item;
    } else {
      return total;
    }
  }, 0);
}
console.log(addNumbers(mixedData));
