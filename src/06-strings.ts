(()=>{

  // infered type
  let productTitle = 'Samsung Galaxy S10';
  productTitle = 'Samsung Galaxy S20';

  const producDescription = "Samsung Galaxy S20 is the best smartphone in the world";
  let isNew: boolean = true;
  let producPrice = 1000;

  const summary = `
    title: ${productTitle},
    description: ${producDescription},
    isNew: ${isNew},
    price: ${producPrice}
  `;

  console.log('summary ', summary);

})();
