// Design a TypeScript function that takes a parameter of a union type (e.g., string | number). If it's a string, return its length. If it's a number, return the square of that number.

function squareOrLength(x: string | number): number | string {
  if (typeof x === "string") {
    return x.length;
  } else {
    return x * x;
  }
}

console.log("String:", squareOrLength("Noyon"));
console.log("Number:", squareOrLength(23));
