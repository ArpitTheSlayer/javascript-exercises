const fibonacci = function (n) {
  let a = 0,
    b = 1,
    sum = 0;
  if (n == 1) return 1;
  if (n < 0) return "OOPS";

  for (let i = 2; i <= n; i++) {
    sum = a + b;
    a = b;
    b = sum;
  }
  return sum;
};

// Do not edit below this line
module.exports = fibonacci;
