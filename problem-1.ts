// Design a TypeScript function that takes a parameter of a union type (e.g., string | number). If it's a string, return its length. If it's a number, return the square of that number.

function squareOrLength(inputValue: string | number): number {
  if (typeof inputValue === "string") {
    return inputValue.length;
  }
  return inputValue * inputValue;
}

console.log("String:", squareOrLength("Noyon"));
console.log("Number:", squareOrLength(23));
