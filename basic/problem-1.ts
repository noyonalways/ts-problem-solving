// Problem 1:
function squareOrLength(inputValue: string | number): number {
  if (typeof inputValue === "string") {
    return inputValue.length;
  }
  return inputValue * inputValue;
}

console.log("String:", squareOrLength("Noyon"));
console.log("Number:", squareOrLength(23));
