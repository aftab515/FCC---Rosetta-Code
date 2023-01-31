function exponentialGenerator(n) {
  const firstNumbers = [];
  // Only change code below this line
  for (let i = 2; firstNumbers.length < n; i++) {
    if (!Number.isInteger(Math.cbrt(i**2))) {
      firstNumbers.push(i**2)
    }
  }
  return firstNumbers[n-1];
}