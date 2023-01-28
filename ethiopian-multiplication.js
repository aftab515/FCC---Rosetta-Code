function eth_mult(a, b) {
  // required functions
  const halve = (n) => Math.floor(n/2);
  const double = (n) => n + n;
  const isEven = (n) => n % 2 === 0;

  // setup variables
  let [left, right] = [a, b].sort((a, b) => a - b);
  let total = isEven(left) ? 0 : right;

  // Ethiopian algorithm
  while (left > 1) {
    left = halve(left);
    right = double(right);
    if (!isEven(left))
      total += right;
  }

  // return result
  return total;
}