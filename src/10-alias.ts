(()=>{

  // Alias

  type UserID = number | string;
  let userId: UserID;

  // Literal types

  let shirtSizeLT: 'S' | 'M' | 'L';
  shirtSizeLT = 'S';
  shirtSizeLT = 'M';
  shirtSizeLT = 'L';

  // Alias

  type Sizes = 'S' | 'M' | 'L';
  let shirtSizeAlias: Sizes;


  function greeting(userId: UserID, size: Sizes) {
    if (typeof userId === 'number') {
      console.log(`Your savings are ${userId.toFixed(2)}`);
    }
  };

  greeting(1111, 'L');
  greeting('1111', 'M');
  greeting(222, 'S');


})();
