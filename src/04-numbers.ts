(()=>{

  // infered type
  let productPrice = 100;
  productPrice = 112.5;
  console.log('productPrice', productPrice);


  // explicit type
  let customerAge: number = 20;
  customerAge = customerAge + 1;
  console.log('customerAge', customerAge);

  let productInStock: number = 10;
  console.log('productInStock', productInStock);
  if(productInStock > 10){
    console.log('Product in stock', productInStock);
  }

  let discount = parseInt('123');
  console.log('discount', discount);

  let hex = 0x123;
  console.log('hex', hex);

  let binary = 0b1010;
  console.log('binary', binary);

})();
