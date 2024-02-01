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
