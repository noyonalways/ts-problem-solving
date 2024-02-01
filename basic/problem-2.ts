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
