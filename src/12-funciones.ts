(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  function createProductToJSON(
    name: string,
    price: number,
    available: boolean,
    stock: number,
    size: Sizes
  ) {
    return{
      name,
      price,
      available,
      stock,
      size
    };
  }

  const produc1 = createProductToJSON('T-Shirt', 100, true, 10, 'XL');
  console.log(produc1);
  console.log(produc1.stock);
  console.log(produc1.size);



  const createProductToJSONv2 = (
    name: string,
    price: number,
    available: boolean,
    stock: number,
    size?: Sizes
  ) => {
    return {
      name,
      price,
      available,
      stock,
      size
    };
  }

  const produc2 = createProductToJSONv2('T-Shirt', 100, true, 10);
  console.log(produc2);
  console.log(produc2.stock);
  console.log(produc2.size);
})();
