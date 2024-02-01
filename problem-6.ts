// Write a TypeScript function that takes a parameter of type unknown and uses a type guard to check whether the parameter is an array of numbers. If it is, calculate the sum of the numbers and log it. If it's not, log an error message.

function calculateSum(arr: unknown): number | string {
  if (Array.isArray(arr)) {
    return arr.reduce((total: number, item) => {
      if (typeof item === "number") {
        return total + item;
      } else {
        return "Not an array of numbers";
      }
    }, 0);
  } else {
    return "Not an Array";
  }
}

const arr1: number[] = [1, 2, 3, 4, 5];
const arr2: string[] = ["a", "b", "c", "d", "e"];
const myName: string = "Noyon";
console.log(calculateSum(arr1)); // 15
console.log(calculateSum(arr2)); // Not an array of numbers
console.log(calculateSum(myName)); // No an Array
