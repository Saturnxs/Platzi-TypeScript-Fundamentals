(() => {
  const calcTotal = (prices: number[]): number => {
    return prices.reduce((total, price) => total + price, 0);
  }

  const printTotal = (prices: number[]): void => {
    const rta = calcTotal(prices);
    console.log(`Total: ${rta}`);
  }

  const rta = calcTotal([1, 2, 3, 4, 5]);
  console.log(rta);

  printTotal([1, 2, 3, 4, 5]);
})();
