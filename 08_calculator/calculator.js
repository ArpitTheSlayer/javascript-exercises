const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((result, item) => (result += item), 0);
};

const multiply = function (array) {
  return array.reduce((result, item) => (result *= item), 1);
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
