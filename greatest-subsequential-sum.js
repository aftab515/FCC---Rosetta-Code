function maximumSubsequence(population) {
  // Setup
  let greatestSum = 0;
  let greatestSeq = [];
  // Loop over all possible subsequences
  for (let i = 0; i < population.length; i++) {
    for (let j = i + 1; j <= population.length; j++) {
      const currentSum = population
        .slice(i, j)
        .reduce((a, b) => a + b);
      if (currentSum > greatestSum) {
        greatestSum = currentSum;
        greatestSeq = population.slice(i, j);
      }
    }
  }
  // Return
  return greatestSeq;
}