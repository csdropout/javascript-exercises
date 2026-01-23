const sumAll = function (a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
    return "ERROR";
  }
  if (b < a) {
    [a, b] = [b, a];
  }
  let sum = 0;
  for (; a <= b; a++) {
    sum += a;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
