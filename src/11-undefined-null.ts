(()=>{
  // Undefined and Null

  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null;
  myNumber = 123;

  let myString: string | undefined = undefined;
  myString = 'Hello';

  function hi(name: string | null){
    let hello =  'Hola ';
    if(name){
      hello += name;
    } else {
      hello += 'null';
    }

    return hello;
  }

  console.log(hi('Thomas'));
  console.log(hi(null));


  function hiv2(name: string | null){
    let hello =  'Hola ';
    hello += name?.toLowerCase() ?? 'null';

    return hello;
  }

  console.log(hiv2('Thomas'));
  console.log(hiv2(''));

})();
