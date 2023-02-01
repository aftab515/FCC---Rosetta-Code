function isHarshadOrNiven(n) {
  const harshads = [];
  let current = n;
  while (harshads.length < 10) {
    current++;
    const divisor = current
      .toString()
      .split("")
      .map(digit => parseInt(digit))
      .reduce((sum, digit) => sum + digit);
    if (current % divisor == 0) {
      harshads.push(current);
    }
  }
  return harshads;
}