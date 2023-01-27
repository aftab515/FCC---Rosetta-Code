function combinations(possibleNumbers, total) {
  var police = possibleNumbers.filter(x => x % 2 == 0);
  var sanitation = possibleNumbers;
  var fire = possibleNumbers;

  var parts = [police,sanitation,fire],
      result = parts.reduce((a, b) => a.reduce((r, v) => r.concat(b.map(w => [].concat(v, w))), []));

  const sums = result.filter(x => x.reduce((a, b) => a + b, 0) == total);
  const sums1 = sums.filter(x => x[1] != x[2]);

  return sums1;
}