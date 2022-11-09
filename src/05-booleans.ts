(()=>{

  // infered type
  let isdisable = false;
  console.log('isEnable', isdisable);

  // explicit type
  let isEnable: boolean = true;
  console.log('isEnable', isEnable);


  let isNew = false;
  const random = Math.random();
  isNew = random > 0.5 ? true : false;
  console.log('isNew', isNew);
})();
