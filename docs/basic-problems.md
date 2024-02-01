# Basic Problem Solving

<details open>
<summary>Problem 1</summary>
<p>

Design a TypeScript function that takes a parameter of a union type (e.g., string | number). If it's a string, return its length. If it's a number, return the square of that number.

```ts
// Problem 1:
function squareOrLength(inputValue: string | number): number {
  if (typeof inputValue === "string") {
    return inputValue.length;
  }
  return inputValue * inputValue;
}

console.log("String:", squareOrLength("Noyon"));
console.log("Number:", squareOrLength(23));
```

</p>
</details>

<details open>
<summary>Problem 2</summary>
<p>

Create an interface called Person with optional properties address and phone. The address property itself will be another object containing city and street properties. Implement a function named getAddressCity that takes an argument of type Person and returns the city from the address property of the Person object. Use optional chaining to prevent any type errors.

```ts
// Problem 2:
interface Address {
  city: string;
  street: string;
}

interface Person {
  address?: Address;
  phone?: string;
}

function getAddressCity(person: Person): string {
  const city = person?.address?.city;
  if (city) {
    return city;
  } else {
    return "No address provided";
  }
}

const person1: Person = {
  phone: "+8801706592962",
  address: {
    city: "Gazipur, Dhaka",
    street: "Ranigonj to Fulbaria",
  },
};

const person2: Person = {
  phone: "+8801401234567",
};

console.log(getAddressCity(person1)); // Gazipur, Dhaka
console.log(getAddressCity(person2)); // No address provided
```

</p>
</details>

<details open>
<summary>Problem 3</summary>
<p>

Create a type guard function `isCat` that checks if an object is an instance of a `Cat` class. If it does, the function says "yes, it's a cat." If it doesn't match, the function says "no, it's not a cat."

```ts
// Problem 3:
interface PetProperties {
  name: string;
  age: number;
  color: string;
}

class Cat implements PetProperties {
  constructor(
    public name: string,
    public color: string = "Brown Gray",
    public age: number = 1.5
  ) {}
}

// Type guard function
function isCat(obj: object): obj is Cat {
  return obj instanceof Cat;
}

// Test cases
const mini: Cat = new Cat("Mini", "Brown", 1);
const dog: PetProperties = {
  name: "Dog",
  age: 2,
  color: "White",
};

if (isCat(dog)) {
  console.log("Yes, it's a cat.");
} else {
  console.log("No, it's not a cat.");
}

if (isCat(mini)) {
  console.log("Yes, it's a cat.");
} else {
  console.log("No, it's not a cat.");
}
```

</p>
</details>

<details open>
<summary>Problem 4</summary>
<p>

You got a list that has numbers and words mixed together. Your job is to make a function that will take the list as an argument and return the total by adding them up.

To solve this in TypeScript, you'll look at each thing in the list named mixedData, which looks like this: [1, 'two', 3, 'four', 5]. You'll go through the list, find the numbers, and add them together.

Every time you find a number in the list, you'll add it to a total. You'll start at zero and then keep adding the numbers you find. If no number is found in the list return 0. To make sure TypeScript knows these things are numbers, you'll use type assertions.

```ts
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
```

</p>
</details>

<details open>
<summary>Problem 5</summary>
<p>

Define two interfaces: Car with properties like make, model, and year, and Driver with properties like name and licenseNumber. Create a function that takes two objects of type Car and Driver and returns an object with the combined properties of both types.

```ts
// Problem 5:
interface Car {
  make: string;
  model: string;
  year: number;
}

interface Driver {
  name: string;
  licenseNumber: number;
}

function combineCarAndDriver(
  car: Car,
  driver: Driver
): { car: Car; driver: Driver } {
  return {
    car,
    driver,
  };
}

const car: Car = {
  make: "Honda",
  model: "Civic",
  year: 2020,
};

const driver: Driver = {
  name: "Noyon Rahman",
  licenseNumber: 123456789,
};

console.log(combineCarAndDriver(car, driver));
```

</p>
</details>

<details open>
<summary>Problem 6</summary>
<p>

Write a TypeScript function that takes a parameter of type unknown and uses a type guard to check whether the parameter is an array of numbers. If it is, calculate the sum of the numbers and log it. If it's not, log an error message.

```ts
// Problem 6:
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
```

</p>
</details>

<details open>
<summary>Problem 7</summary>
<p>

Create a TypeScript function called **findFirstOccurrence** that accepts an array and a value to search for. Use **generics** to make the function work with arrays of any data type. Inside the function, find and return the index of the first occurrence of the value in the array. If the value is not found in the array, return -1 to indicate that. Create sample arrays of different data types (e.g., numbers, strings) and call the **findFirstOccurrence** function for each of them to display the results.

```ts
// usage example
const numbers: number[] = [1, 2, 3, 4, 5, 2];
const strings: string[] = ["apple", "banana", "cherry", "date", "apple"];
const targetNumber = 2;
const targetString = "cherry";
const indexInNumbers = findFirstOccurrence(numbers, targetNumber);
const indexInStrings = findFirstOccurrence(strings, targetString);
console.log(indexInNumbers); //output:  1
console.log(indexInStrings); //output: 2
```

```ts
// Problem 7: Solution
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
```

</p>
</details>

<details open>
<summary>Problem 8</summary>
<p>

Create a TypeScript program that simulates a simple shopping cart. Define an interface **Product** with properties like name, price, and quantity. Implement a function that calculates the total cost of the items in the shopping cart. The function should take an array of **Product** objects as input and return the total cost.

```ts
// Problem 8:
interface Product {
  name: string;
  price: number;
  quantity: number;
}

const products: Product[] = [
  {
    name: "Apple",
    price: 100,
    quantity: 5,
  },
  {
    name: "Banana",
    price: 20,
    quantity: 5,
  },
  {
    name: "Mango",
    price: 50,
    quantity: 10,
  },
];

function calculateTotalPrice(arr: Product[]): number {
  return arr.reduce((total: number, item) => {
    const subtotal = item.quantity * item.price;
    total += subtotal;
    return total;
  }, 0);
}
console.log("Total cost:", calculateTotalPrice(products));
```

</p>
</details>
