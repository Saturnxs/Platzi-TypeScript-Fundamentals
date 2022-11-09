(()=>{
  let myDinamicVar: any;

  myDinamicVar = 1000;
  myDinamicVar = 'Samsung Galaxy S20';
  myDinamicVar = true;
  myDinamicVar = {};
  myDinamicVar = [];

  // cast to string

  myDinamicVar = 'Hola Mundo';
  const rta = (myDinamicVar as string).toUpperCase();
  console.log(rta);

  // cast to number

  myDinamicVar = 1000;
  const rta2 = (<number>myDinamicVar);
  console.log(rta2);

})();
