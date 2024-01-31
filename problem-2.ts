// Create an interface called Person with optional properties address and phone. The address property itself will be another object containing city and street properties. Implement a function named getAddressCity that takes an argument of type Person and returns the city from the address property of the Person object. Use optional chaining to prevent any type errors.

interface Person {
  address?: {
    city: string;
    street: string;
  };
  phone?: string;
}

function getAddressCity(person: Person): string {
  return person.address?.city as string;
}

const devNoyon = {
  address: {
    city: "Gazipur, Dhaka",
    street: "Ranigonj Bazar, Fulbaria Road",
  },
  phone: "+8801706592962",
};

console.log(getAddressCity(devNoyon));
