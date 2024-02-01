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
