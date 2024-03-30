const fibonacci = (n) => {
  const fibs = [0, 1];

  if (n < 0) return 'OOPS';
  if (n === 1 || n === 2) return fibs[n - 1];

  for (let i = 2; i <= n; i++) {
    fibs.push(fibs[i - 1] + fibs[i - 2]);
  }

  return fibs[n];
};

// Do not edit below this line
module.exports = fibonacci;
