(() => {
  let userId: number | string;
  userId = 100;
  console.log('userId', userId);

  userId = 'A1029S';
  console.log('userId', userId);

  function greeting(text: number | string) {
    if (typeof text === 'number') {
      console.log(`Your savings are ${text.toFixed(2)}`);
    } else {
      console.log(`Greetings, ${text.toUpperCase()}`);
    }
  };

  greeting(2000);
  greeting('Thomas');

})();
