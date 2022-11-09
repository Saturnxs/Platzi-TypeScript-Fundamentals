import { addProduct, calculateStock, products } from "./product.service";


addProduct({
  name: 'Shoes',
  price: 300,
  available: true,
  stock: 30,
  size: 'M'
});

console.log(products);


console.log(calculateStock(products));
