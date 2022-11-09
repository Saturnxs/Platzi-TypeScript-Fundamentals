(() => {

  // infered type

  let prices = [1000, 2000, 3000];
  prices.push(4000);
  console.log('prices ', prices);

  let multipleTypes = [1000, 'Samsung Galaxy S20', true];
  console.log(multipleTypes);


  // explicit type


  let prices2: number[] = [1000, 2000, 3000];
  prices2.push(4000);
  console.log('prices2 ', prices2);

  let multipleTypes2: (number | string | boolean)[] = [1000, 'Samsung Galaxy S20', true];
  multipleTypes2.push(4000);
  console.log(multipleTypes2);


  // map arrays

  let numbers = [1, 2, 3, 4, 5];
  console.log('numbers ', numbers.map((number) => number * 2));


  // tuples

  let product: [string, number] = ['Samsung Galaxy S20', 1000];
  console.log('product ', product);


  // tuples array

  let products: [string, number][] = [
    ['Samsung Galaxy S20', 1000],
    ['Samsung Galaxy S10', 900],
    ['Samsung Galaxy S9', 800],
  ];
  console.log('products ', products);


})();
