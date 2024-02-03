const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  let sum = 0;
  array.forEach((item) => (sum += item));
  return sum;
};

const multiply = function (array) {
  let result = 1;
  array.forEach((item) => (result *= item));
  return result;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (n) {
  if (n === 1 || n === 0) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
