function iteratedSquare(n) {
  let squaredN = n;
  while (squaredN !== 1 && squaredN !== 89) {
    squaredN = squaredN
      .toString()
      .split('')
      .reduce((sum, digit) => sum + parseInt(digit) ** 2, 0);
  }
  return squaredN;
}