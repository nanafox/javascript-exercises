const add = (x, y) => {
  return x + y;
};

const subtract = (x, y) => {
  return x - y;
};

const sum = (array) => {
  return array.reduce((total, item) => total + item, 0);
};

const multiply = (array) => {
  return array.reduce((total, item) => total * item, 1);
};

const power = (base, exponent) => { return base ** exponent; };

const factorial = (n) => {
  if (n === 0) return 1;

  return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
