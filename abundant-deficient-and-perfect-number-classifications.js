function getDPA(num) {
  let [deficient, perfect, abundant] = [0, 0, 0];
  // Check all numbers in the range
  for (let i = 1; i <= num; i++) {
    const sum = getSumOfFacts(i);
    if (sum < i) {
      deficient++;
    } else if (sum === i) {
      perfect++;
    } else {
      abundant++;
    }
  }
  return [deficient, perfect, abundant];
}

function getSumOfFacts(num) {
  let sum = 1; // 1 is always a divisor
  // Optimization Trick - Factors come in pairs up to the sqrt of num
  let upperBound = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= upperBound; i++) {
    if (num % i === 0) {
      sum += i;
      sum += num / i;
    }
  }
  // Remove sqrt if factor to prevent double counting
  if (upperBound === Math.sqrt(num)) {
    sum -= upperBound;
  }
  return sum;
}

console.log(getDPA(10000));