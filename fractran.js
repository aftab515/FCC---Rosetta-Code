function fractran(progStr) {
  // Parse input
  const fractions = progStr
    .split(", ")
    .map(
      fraction => ({
        numerator: fraction.split('/')[0],
        denominator: fraction.split('/')[1],
      }));
  // Run fractran program to 10 numbers
  let n = 2;
  const sequence = [n];
  while (sequence.length < 10) {
    let i;
    for (i = 0; i < fractions.length; i++) {
      const nfi = n * fractions[i].numerator / fractions[i].denominator;
      if (nfi === parseInt(nfi)) {
        sequence.push(nfi);
        n = nfi;
        break;
      }
    }
    if (i === fractions.length) break; // No integer n*fi found
  }
  return sequence;
}