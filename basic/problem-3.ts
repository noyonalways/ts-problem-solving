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
