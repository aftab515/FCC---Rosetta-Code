// Get sum of factors
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

// Test if number has amicalbe pair
function getAmicablePairValueInBound(a, bound) {
  const sumA = getSumOfFacts(a);
  if (sumA !== a && sumA <= bound && getSumOfFacts(sumA) === a) {
    return [true, sumA];
  }
  return [false, 0];
}

// Get amicable pairs
function amicablePairsUpTo(maxNum) {
  const amicablePairs = [];
  for (let i = 1; i < maxNum; i++) {
    const [hasPair, pairValue] = getAmicablePairValueInBound(i, maxNum);
    if (hasPair && pairValue > i) {
      amicablePairs.push([i, pairValue]);
    }
  }
  return amicablePairs;
}