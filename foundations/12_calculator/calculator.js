const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((sum, current) => (sum += current), 0);
};

const multiply = function (arr) {
  return arr.reduce(
    (sum, current) => (sum *= current),
    arr.length >= 1 ? 1 : 0,
  );
};

const power = function (base, exponent) {
  return base ** exponent;
};

const factorial = function (number) {
  if (number === 0) {
    return 1
  }
  return number * factorial(number - 1)
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
