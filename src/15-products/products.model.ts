export type Sizes = 'S' | 'M' | 'L' | 'XL';

export type Product = {
  name: string,
  price: number,
  available: boolean,
  stock: number,
  size?: Sizes
};
