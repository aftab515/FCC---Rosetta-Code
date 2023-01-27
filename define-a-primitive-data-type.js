function Num(n) {
  if (typeof(n) !== 'number') {
    throw TypeError("Not a Number");
  }
  if (n < 1 || n > 10) {
    throw TypeError("Out of range");
  }
  return new Number(n);
}