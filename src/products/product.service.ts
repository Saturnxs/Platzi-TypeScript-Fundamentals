import { Product } from "./products.model";

export const products: Product[] = [
    {
      name: 'T-Shirt',
      price: 100,
      available: true,
      stock: 10,
      size: 'XL'
    },
    {
      name: 'Pants',
      price: 200,
      available: true,
      stock: 20,
      size: 'L'
    }
  ]

export const addProduct = (product: Product) => {
    products.push(product);
};

export const calculateStock = (products: Product[]) => {
    let total = 0;
    products.forEach(product => {
      total += product.stock;
    });
    return total;
}
